const userModel = require('../models/users.mongo');

async function getProductListBySerial(req, res) {
  try {
    const { userName, remainingProduct } = req.body;

    if (!userName || !remainingProduct || !Array.isArray(remainingProduct) || remainingProduct.length === 0) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const validatedQuantities = []; // Array to store all validated quantities

    const user = await userModel.findOne({ userName });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    for (const { serialNo, qty } of remainingProduct) {
      const product = user.remainingProduct.find((item) => item.serialNo === serialNo);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      const { category, itemDescription, qty: availableQty, sellPrice } = product;

      // Check if the validated quantity for the same serial number exceeds the available quantity
      const validatedQty = user.temporaryProduct.reduce((totalQty, tempQty) => {
        if (tempQty.serialNo === serialNo) {
          return totalQty + parseInt(tempQty.qty, 10); // Parse the string quantity as a number
        }
        return totalQty;
      }, 0);

      const qtyAsNumber = parseInt(qty, 10); // Parse the string quantity as a number
      const updatedQty = validatedQty + qtyAsNumber;

      if (updatedQty > availableQty) {
        return res.status(400).json({ message: 'Insufficient quantity' });
      }

      // Calculate the remaining quantity after deducting the validated quantity
      const remainingQty = availableQty - updatedQty;

      if (remainingQty < 0) {
        return res.status(400).json({ message: 'Insufficient quantity' });
      }

      // Store the validated quantity in the temporaryProduct array
      const existingIndex = user.temporaryProduct.findIndex((tempQty) => tempQty.serialNo === serialNo);
      if (existingIndex !== -1) {
        user.temporaryProduct[existingIndex].qty += qtyAsNumber;
      } else {
        user.temporaryProduct.push({
          userName,
          serialNo,
          category,
          itemDescription,
          qty: qtyAsNumber,
          sellPrice,
        });
      }

      validatedQuantities.push({
        userName,
        serialNo,
        category,
        itemDescription,
        qty: qtyAsNumber,
        sellPrice,
      });
    }

    // Save the updated user document
    await user.save();

    res.status(200).json(validatedQuantities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { getProductListBySerial };

















// const userModel = require('../models/users.mongo');

// // Temporary array to store validated quantities
// let tempQuantities = [];

// async function getProductListBySerial(req, res) {
//   console.log(tempQuantities);
//   try {
//     const { userName, remainingProduct } = req.body;

//     if (!userName || !remainingProduct || !Array.isArray(remainingProduct) || remainingProduct.length === 0) {
//       return res.status(400).json({ message: 'Invalid request body' });
//     }

//     const { serialNo } = remainingProduct[0]; // Extract serialNo separately

//     const user = await userModel.findOne({ userName });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const product = user.remainingProduct.find(item => item.serialNo === serialNo);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     const { category, itemDescription, qty: availableQty, sellPrice } = product;

//     const { qty } = req.body.remainingProduct[0];

//     // Check if the validated quantity for the same serial number exceeds the available quantity
//     const validatedQty = tempQuantities.reduce((totalQty, tempQty) => {
//       if (tempQty.serialNo === serialNo) {
//         return totalQty + tempQty.qty;
//       }
//       return totalQty;
//     }, 0);

//     if (qty + validatedQty > availableQty) {
//       return res.status(400).json({ message: 'Insufficient quantity' });
//     }

//     // Calculate the remaining quantity after deducting the validated quantity
//     const remainingQty = availableQty - validatedQty - qty;

//     if (remainingQty < 0) {
//       return res.status(400).json({ message: 'Insufficient quantity' });
//     }

//     // Store the validated quantity in the temporary array only if it's not the first entry
//     if (tempQuantities.length > 0) {
//       tempQuantities.push({ serialNo, qty });
//     } else {
//       tempQuantities = [{ serialNo, qty }]; // Set tempQuantities as an array with the first entry
//     }

//     const response = {
//       userName: user.userName, // Include userName in the response
//       serialNo,
//       category,
//       itemDescription,
//       qty,
//       sellPrice,
//     };

//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

// module.exports = { getProductListBySerial };














