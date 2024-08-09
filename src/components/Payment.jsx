function Payment() {
  return (
    <div className="sm:py-20 py-6 md:py-36 px-4 text-center flex items-center justify-center">
      <div>
        <h1 className="text-xl font-bold text-center md:pb-6">
          Payment Successful <span className="text-yellow-600 text-2xl">!</span>
        </h1>
        <p className="py-10 font-semibold">
          Thank you for your purchase! Your payment has been successfully
          processed.
        </p>
        <p className="font-bold">Your order will be Delivered in few minutes</p>
        <p className="font-bold">
          Your order has been successfully placed to your delivery address
        </p>
      </div>
    </div>
  );
}

export default Payment;
