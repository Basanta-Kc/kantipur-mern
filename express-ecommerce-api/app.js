const express = require("express");
const cors = require("cors");
require("express-async-errors");
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(
  "sk_test_51M2ALFFEon6AQRRqZGoTHmXZFVSKoxQVoFRYpjpHMNeZ7CuWF2i2MEuVXCLDRGceLSR9Fh1tjLQp5aUK76gEHyX100Oz1EleVm"
);
const connectDb = require("./config/db");
const productRoutes = require("./route/product.route");
const authRoutes = require("./route/auth.route");

const Order = require("./model/Order");
const app = express();
const port = 3000;

connectDb();
app.use(cors());
app.use(express.static("uploads"));
app.use(cookieParser());

const endpointSecret =
  "whsec_4e432bec602c524f16450de5d256b34138cbecf1397183ae80e77a02d2664d3e";

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      console.log(err);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const { orderId } = event.data.object.metadata;
        await Order.updateOne(
          { _id: orderId },
          {
            status: "completed",
          }
        );
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

app.use(express.json());

app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  // save somewhere in cloud, or file (coloudwatch, sentry)
  console.log(err);

  res.status(500).json({
    message: "Something went wrong.",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//tomorrow: sort by price, authentication, autorization
