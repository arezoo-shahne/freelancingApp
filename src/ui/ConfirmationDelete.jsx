function ConfirmationDelete({ sourceName, onClose, disable, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base">
        آیا از حذف {sourceName} مطمئن هستید؟
      </h2>
      <div className="flex items-center justify-between gap-x-8 mt-8">
        <button
          onClick={onClose}
          disabled={disable}
          className="btn btn--primary flex-1 "
        >
          لغو
        </button>
        <button
          onClick={onConfirm}
          disabled={disable}
          className="btn btn--danger flex-1"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmationDelete;
