


<div className="flex justify-end p-1">
  <div className="absolute flex p-1 bg-yellow-500 rounded-full ">
    <p
      className="text-xl font-bold text-red-700 rounded-full bg-yellow-300 px-[10px] cursor-pointer"
      onClick={() => removeQuantity(item._id)}
    >
      -
    </p>
    <span className="mx-2 font-bold text-white">{item.quantity}</span>
    <p
      className="text-xl font-bold text-red-700 rounded-full bg-yellow-300 px-2 cursor-pointer"
      onClick={() => addQuantity(item._id)}
    >
      +
    </p>
  </div>
</div>
