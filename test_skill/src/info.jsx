import React from "react";

const Info = () => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Thông tin cá nhân</h1>

      <div>
        <h2 className="text-xl font-semibold text-gray-700">Tên:</h2>
        <p className="text-gray-600">Bùi Quốc Long</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700">Địa chỉ email:</h2>
        <p className="text-gray-600">buiquoclong1203@gmail.com</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700">Số điện thoại:</h2>
        <p className="text-gray-600">0392561460</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700">Địa chỉ:</h2>
        <p className="text-gray-600">Phường Linh Trung,Thủ Đức, TP. HCM</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700">Giới thiệu:</h2>
        <p className="text-gray-600">
          Tôi là Bùi Quốc Long, một lập trình viên với niềm đam mê trong việc
          phát triển các ứng dụng web. Tôi luôn tìm kiếm các cơ hội mới để học
          hỏi và nâng cao kỹ năng của mình trong lĩnh vực công nghệ.
        </p>
      </div>
    </div>
  );
};

export default Info;
