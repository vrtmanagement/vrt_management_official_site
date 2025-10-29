import mongoose from "mongoose";

// Individual question response schema
const questionResponseSchema = new mongoose.Schema({
  questionId: {
    type: Number,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  selectedAnswer: {
    type: String,
    required: true
  },
  questionNumber: {
    type: Number,
    required: true
  }
}, { _id: false });

// Main quiz submission schema
const quizSubmissionSchema = new mongoose.Schema({
  // User information from the form page
  user: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    }
  },
  
  // Quiz responses
  responses: [questionResponseSchema],
  
  // Quiz metadata
  metadata: {
    submittedAt: {
      type: Date,
      default: Date.now
    },
    totalQuestions: {
      type: Number,
      required: true,
      default: 5
    },
    completedQuestions: {
      type: Number,
      required: true
    },
    completionRate: {
      type: Number,
      required: true,
      min: 0,
      max: 100
    },
    timeSpent: {
      type: Number, // in seconds
      default: 0
    }
  },
  
  // Analysis and insights (for future use)
  analysis: {
    primaryChallenge: {
      type: String,
      default: null
    },
    hiringPriority: {
      type: String,
      default: null
    },
    aiConcern: {
      type: String,
      default: null
    },
    successMetric: {
      type: String,
      default: null
    },
    leadershipFocus: {
      type: String,
      default: null
    },
    recommendedEbookType: {
      type: String,
      enum: ['talent-acquisition', 'team-building', 'leadership-development', 'ai-recruitment', 'performance-management'],
      default: null
    }
  },
  
  // Status tracking
  status: {
    type: String,
    enum: ['completed', 'incomplete', 'processing'],
    default: 'completed'
  },
  
  // Ebook delivery tracking
  ebookDelivery: {
    sent: {
      type: Boolean,
      default: false
    },
    sentAt: {
      type: Date,
      default: null
    },
    deliveryMethod: {
      type: String,
      enum: ['email', 'download-link'],
      default: 'email'
    },
    customEbookUrl: {
      type: String,
      default: null
    }
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt
  collection: 'quiz_submissions'
});

// Indexes for better query performance
quizSubmissionSchema.index({ 'user.email': 1 });
quizSubmissionSchema.index({ 'metadata.submittedAt': -1 });
quizSubmissionSchema.index({ 'analysis.recommendedEbookType': 1 });
quizSubmissionSchema.index({ 'ebookDelivery.sent': 1 });

// Virtual for getting user's primary challenge
quizSubmissionSchema.virtual('primaryChallenge').get(function() {
  const challengeResponse = this.responses.find(r => r.questionId === 1);
  return challengeResponse ? challengeResponse.selectedAnswer : null;
});

// Method to analyze responses and recommend ebook type
quizSubmissionSchema.methods.analyzeResponses = function() {
  const responses = this.responses;
  
  // Extract key insights
  const primaryChallenge = responses.find(r => r.questionId === 1)?.selectedAnswer;
  const hiringPriority = responses.find(r => r.questionId === 2)?.selectedAnswer;
  const aiConcern = responses.find(r => r.questionId === 3)?.selectedAnswer;
  const successMetric = responses.find(r => r.questionId === 4)?.selectedAnswer;
  const leadershipFocus = responses.find(r => r.questionId === 5)?.selectedAnswer;
  
  // Determine recommended ebook type based on responses
  let recommendedEbookType = 'leadership-development'; // default
  
  if (primaryChallenge?.includes('talent') || hiringPriority?.includes('Quality')) {
    recommendedEbookType = 'talent-acquisition';
  } else if (primaryChallenge?.includes('culture') || primaryChallenge?.includes('team')) {
    recommendedEbookType = 'team-building';
  } else if (aiConcern || primaryChallenge?.includes('remote')) {
    recommendedEbookType = 'ai-recruitment';
  } else if (successMetric?.includes('performance') || successMetric?.includes('productivity')) {
    recommendedEbookType = 'performance-management';
  }
  
  // Update analysis
  this.analysis = {
    primaryChallenge,
    hiringPriority,
    aiConcern,
    successMetric,
    leadershipFocus,
    recommendedEbookType
  };
  
  return this.analysis;
};

// Pre-save middleware to automatically analyze responses
quizSubmissionSchema.pre('save', function(next) {
  if (this.responses && this.responses.length > 0) {
    this.analyzeResponses();
  }
  next();
});

// Static method to get quiz statistics
quizSubmissionSchema.statics.getQuizStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: null,
        totalSubmissions: { $sum: 1 },
        completedSubmissions: {
          $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] }
        },
        averageCompletionRate: { $avg: '$metadata.completionRate' },
        ebookTypes: { $push: '$analysis.recommendedEbookType' }
      }
    }
  ]);
  
  return stats[0] || {
    totalSubmissions: 0,
    completedSubmissions: 0,
    averageCompletionRate: 0,
    ebookTypes: []
  };
};

// Check if the model already exists, if not create it
if (mongoose.models.QuizSubmission) {
  delete mongoose.models.QuizSubmission;
}

const QuizSubmission = mongoose.model("QuizSubmission", quizSubmissionSchema);

export default QuizSubmission;
