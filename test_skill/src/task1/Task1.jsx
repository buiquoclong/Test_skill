import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { API_ENDPOINTS } from "../config/apiConfig";

const Task1 = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { register, handleSubmit } = useForm();
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null); // State để lưu file đã upload
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileName(file.name); // Cập nhật tên file sau khi được kéo và thả
      setUploadedFile(file); // Lưu file đã upload
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // Chỉ cho phép kéo thả 1 file
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    }, // Giới hạn chỉ nhận file Excel
  });

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      // Kết nối với API POST để upload file
      const response = await axios.post(API_ENDPOINTS.uploadFile, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Upload file thành công!");
      return response.data;
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload file không thành công. Vui lòng kiểm tra lại!");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = async (startTime, endTime) => {
    const data = { startTime: startTime, endTime: endTime };
    console.log(data);
    setLoading(true);
    try {
      // Kết nối với API GET để tính tổng tiền
      const response = await axios.get(API_ENDPOINTS.calculateTotal, data);
      alert("Lấy dữ liệu thành công!");
      setTotalAmount(response.data.totalAmount);
    } catch (error) {
      console.error("Error calculating total:", error);
      alert("Lấy dữ liệu không thành công. Vui lòng kiểm tra lại!");
    } finally {
      setLoading(false); // Dừng loading sau khi tính toán hoàn thành hoặc gặp lỗi
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
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

      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        Báo cáo giao dịch
      </h1>

      <div className="">
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer text-center hover:border-blue-500 transition mb-2"
        >
          <input {...getInputProps()} className="" />
          {fileName ? (
            <p className="text-green-600 font-medium">{fileName}</p>
          ) : (
            <p className="text-gray-500">
              Kéo và thả file Excel ở đây, hoặc nhấn để chọn file
            </p>
          )}
        </div>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition mb-2 outline-none"
          onClick={() => {
            if (uploadedFile) {
              // Nếu đã chọn file thì upload
              uploadFile(uploadedFile);
            } else {
              alert("Vui lòng chọn file trước khi upload.");
            }
          }}
        >
          Upload File
        </button>
      </div>

      <form onSubmit={handleSubmit(calculateTotal)} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium">Giờ bắt đầu:</label>
          <input
            type="datetime-local"
            {...register("startTime")}
            className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 font-medium">Giờ kết thúc:</label>
          <input
            type="datetime-local"
            {...register("endTime")}
            className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition outline-none"
        >
          Tính toán
        </button>
      </form>

      <h2 className="mt-6 text-xl font-semibold text-gray-700">
        Tổng thành tiền: {totalAmount.toLocaleString("vi-VN")} VND
      </h2>
    </div>
  );
};

export default Task1;
