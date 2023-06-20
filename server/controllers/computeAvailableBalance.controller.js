const usersModel = require('../models/users.mongo');

async function remainingBalance() {
  try {
    const users = await usersModel.find();

    for (const user of users) {
      const remainingProducts = user.productList.reduce((accumulator, product) => {
        const existingProduct = accumulator.find((item) => item.serialNo === product.serialNo);

        if (existingProduct) {
          if (existingProduct.sellPrice !== product.sellPrice) {
            existingProduct.sellPrice = product.sellPrice;
          }
          if (existingProduct.itemDescription !== product.itemDescription) {
            existingProduct.itemDescription = product.itemDescription;
          }
          existingProduct.qty += parseInt(product.qty, 10);
        } else {
          accumulator.push({
            userId: user._id,
            serialNo: product.serialNo,
            category: product.category,
            itemDescription: product.itemDescription,
            qty: parseInt(product.qty, 10),
            sellPrice: product.sellPrice,
          });
        }

        return accumulator;
      }, []);

      await usersModel.findOneAndUpdate(
        { _id: user._id },
        { remainingProduct: remainingProducts },
        { new: true }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { remainingBalance };


// const usersModel = require('../models/users.mongo');

// async function remainingBalance() {
//   try {
//     const users = await usersModel.find();

//     users.forEach(async (user) => {
//       const remainingProducts = user.productList.reduce((accumulator, product) => {
//         const existingProduct = accumulator.find((item) => item.serialNo === product.serialNo);

//         if (existingProduct) {
//           if (existingProduct.sellPrice !== product.sellPrice) {
//             existingProduct.sellPrice = product.sellPrice;
//           }
//           if (existingProduct.itemDescription !== product.itemDescription) {
//             existingProduct.itemDescription = product.itemDescription;
//           }
//           existingProduct.qty += parseInt(product.qty, 10);
//         } else {
//           accumulator.push({
//             userId: user._id,
//             serialNo: product.serialNo,
//             category: product.category,
//             itemDescription: product.itemDescription,
//             qty: parseInt(product.qty, 10),
//             sellPrice: product.sellPrice,
//           });
//         }

//         return accumulator;
//       }, []);

//       user.remainingProduct = remainingProducts;
//       await user.save();
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }



// module.exports = { remainingBalance };
