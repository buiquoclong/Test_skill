import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_ENDPOINTS } from "../config/apiConfig";

const Task2 = () => {
  const [loading, setLoading] = useState(false);
  const pumps = [
    { value: "1", label: "Trụ 1" },
    { value: "2", label: "Trụ 2" },
    { value: "3", label: "Trụ 3" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const Formdata = {
        time: data.datetime,
        quantity: data.quantity,
        pump: data.pump,
        revenue: data.revenue,
        unitPrice: data.unitPrice,
      };

      const response = await axios.post(API_ENDPOINTS.updateService, Formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Dữ liệu giao dịch:", data);
      alert("Cập nhật thành công!");
      console.log("Phản hồi từ API:", response.data);
    } catch (error) {
      console.error("Có lỗi xảy ra khi cập nhật:", error);
      alert("Cập nhật không thành công. Vui lòng kiểm tra lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-md">
    //   <div className="flex justify-between items-center mb-4">
    //     <h2 className="text-xl font-semibold">Nhập giao dịch</h2>
    //     <button
    //       type="submit"
    //       className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    //       onClick={handleSubmit(onSubmit)} // Gọi onSubmit khi nhấn nút
    //     >
    //       Cập nhật
    //     </button>
    //   </div>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium mb-1" htmlFor="datetime">
    //         Thời gian
    //       </label>
    //       <input
    //         type="datetime-local"
    //         id="datetime"
    //         {...register("datetime", { required: "Thời gian là bắt buộc" })}
    //         className={`block w-full border rounded-md p-2 ${
    //           errors.datetime ? "border-red-500" : "border-gray-300"
    //         }`}
    //       />
    //       {errors.datetime && (
    //         <p className="text-red-500 text-xs">{errors.datetime.message}</p>
    //       )}
    //     </div>

    //     <div className="mb-4">
    //       <label className="block text-sm font-medium mb-1" htmlFor="quantity">
    //         Số lượng (lít)
    //       </label>
    //       <input
    //         type="number"
    //         id="quantity"
    //         {...register("quantity", {
    //           required: "Số lượng là bắt buộc",
    //           min: { value: 1, message: "Số lượng phải lớn hơn 0" },
    //         })}
    //         className={`block w-full border rounded-md p-2 ${
    //           errors.quantity ? "border-red-500" : "border-gray-300"
    //         }`}
    //       />
    //       {errors.quantity && (
    //         <p className="text-red-500 text-xs">{errors.quantity.message}</p>
    //       )}
    //     </div>

    //     <div className="mb-4">
    //       <label className="block text-sm font-medium mb-1" htmlFor="pump">
    //         Trụ
    //       </label>
    //       <select
    //         id="pump"
    //         {...register("pump", { required: "Vui lòng chọn trụ" })}
    //         className={`block w-full border rounded-md p-2 ${
    //           errors.pump ? "border-red-500" : "border-gray-300"
    //         }`}
    //       >
    //         <option value="">Chọn trụ</option>
    //         <option value="1">Trụ 1</option>
    //         <option value="2">Trụ 2</option>
    //         <option value="3">Trụ 3</option>
    //         {/* Thêm các lựa chọn khác nếu cần */}
    //       </select>
    //       {errors.pump && (
    //         <p className="text-red-500 text-xs">{errors.pump.message}</p>
    //       )}
    //     </div>

    //     <div className="mb-4">
    //       <label className="block text-sm font-medium mb-1" htmlFor="revenue">
    //         Doanh thu
    //       </label>
    //       <input
    //         type="number"
    //         id="revenue"
    //         {...register("revenue", {
    //           required: "Doanh thu là bắt buộc",
    //           min: { value: 0, message: "Doanh thu không thể âm" },
    //         })}
    //         className={`block w-full border rounded-md p-2 ${
    //           errors.revenue ? "border-red-500" : "border-gray-300"
    //         }`}
    //       />
    //       {errors.revenue && (
    //         <p className="text-red-500 text-xs">{errors.revenue.message}</p>
    //       )}
    //     </div>

    //     <div className="mb-4">
    //       <label className="block text-sm font-medium mb-1" htmlFor="unitPrice">
    //         Đơn giá
    //       </label>
    //       <input
    //         type="number"
    //         id="unitPrice"
    //         {...register("unitPrice", {
    //           required: "Đơn giá là bắt buộc",
    //           min: { value: 0, message: "Đơn giá không thể âm" },
    //         })}
    //         className={`block w-full border rounded-md p-2 ${
    //           errors.unitPrice ? "border-red-500" : "border-gray-300"
    //         }`}
    //       />
    //       {errors.unitPrice && (
    //         <p className="text-red-500 text-xs">{errors.unitPrice.message}</p>
    //       )}
    //     </div>
    //   </form>
    // </div>
    <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-md">
      {loading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 border-8 border-t-8 border-gray-200 rounded-full animate-spin mb-4"></div>
            <div className="text-white text-lg font-semibold">
              Đang xử lý...
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Nhập giao dịch</h2>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={handleSubmit(onSubmit)} // Gọi onSubmit khi nhấn nút
        >
          Cập nhật
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <div
            className={`border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.datetime ? "border-red-500" : "border-gray-300"
            }`}
          >
            <label className="block text-sm font-medium" htmlFor="datetime">
              Thời gian
            </label>
            <input
              type="datetime-local"
              id="datetime"
              {...register("datetime", { required: "Thời gian là bắt buộc" })}
              className="block w-full border-none outline-none " // xóa border của input
            />
            {errors.datetime && (
              <p className="text-red-500 text-xs">{errors.datetime.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div
            className={`border rounded-md p-2 ${
              errors.quantity ? "border-red-500" : "border-gray-300"
            }`}
          >
            <label className="block text-sm font-medium" htmlFor="quantity">
              Số lượng (lít)
            </label>
            <input
              type="number"
              id="quantity"
              {...register("quantity", {
                required: "Số lượng là bắt buộc",
                min: { value: 1, message: "Số lượng phải lớn hơn 0" },
              })}
              className="block w-full border-none outline-none" // xóa border của input
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs">{errors.quantity.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div
            className={`border rounded-md p-2 ${
              errors.pump ? "border-red-500" : "border-gray-300"
            }`}
          >
            <label className="block text-sm font-medium" htmlFor="pump">
              Trụ
            </label>
            <select
              id="pump"
              {...register("pump", { required: "Vui lòng chọn trụ" })}
              className="block w-full border-none outline-none" // xóa border của select
            >
              <option value="">Chọn trụ</option>
              {pumps.map((pump) => (
                <option key={pump.value} value={pump.value}>
                  {pump.label}
                </option>
              ))}
              {/* Thêm các lựa chọn khác nếu cần */}
            </select>
            {errors.pump && (
              <p className="text-red-500 text-xs">{errors.pump.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div
            className={`border rounded-md p-2 ${
              errors.revenue ? "border-red-500" : "border-gray-300"
            }`}
          >
            <label className="block text-sm font-medium" htmlFor="revenue">
              Doanh thu
            </label>
            <input
              type="number"
              id="revenue"
              {...register("revenue", {
                required: "Doanh thu là bắt buộc",
                min: { value: 0, message: "Doanh thu không thể âm" },
              })}
              className="block w-full border-none outline-none" // xóa border của input
            />
            {errors.revenue && (
              <p className="text-red-500 text-xs">{errors.revenue.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div
            className={`border rounded-md p-2 ${
              errors.unitPrice ? "border-red-500" : "border-gray-300"
            }`}
          >
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="unitPrice"
            >
              Đơn giá
            </label>
            <input
              type="number"
              id="unitPrice"
              {...register("unitPrice", {
                required: "Đơn giá là bắt buộc",
                min: { value: 0, message: "Đơn giá không thể âm" },
              })}
              className="block w-full border-none outline-none" // xóa border của input
            />
            {errors.unitPrice && (
              <p className="text-red-500 text-xs">{errors.unitPrice.message}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Task2;
