const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({


  businessName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  productList: [
    {
      userId: {
        type: String,
      },
      entryDate: {
        type: String,
      },
      serialNo: {
        type: String,
      },
      category: {
        type: String,
      },
      itemDescription: {
        type: String,
      },
      qty: {
        type: String,
      },
      buyPrice: {
        type: String,
      },
      sellPrice: {
        type: String,
      },
      profit: {
        type: String,
      },
    },
  ],
  salesList: [{
    salesId: {
      type: String,
    },
    serialNo: {
      type: String,
    },
    category: {
      type: String,
    },
    itemDescription: {
      type: String,
    },
    qty: {
      type: String,
    },
    sellPrice: {
      type: String,
    },
    totalPrice: {
      type: String,
    },

  }],
  remainingProduct: [{ 
    userId: {
      type: String,
    },

    serialNo: {
      type: String,
    },
    category: {
      type: String,
    },
    itemDescription: {
      type: String,
    },
    qty: {
      type: String,
    },
    sellPrice: {
      type: String,
    },
  }],
});

module.exports = mongoose.model('User', usersSchema);


  