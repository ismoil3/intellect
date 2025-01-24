"use client";

import { useSettingStore } from "@/app/store/setting/useSettingStore";
import Link from "next/link";
import { useState } from "react";
import Container from "../shared/container/container";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { darkMode } = useSettingStore();

  return (
    <Container>
      <div
        className={`w-full p-8 rounded-3xl shadow-2xl transition-all ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-purple-50 to-blue-50"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Ліва частина */}
          <div className="space-y-6 relative">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Поможем решить все вопросы
            </h1>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Если вы хотите узнать больше о Skillbox или не знаете, какую
              программу обучения выбрать, оставьте заявку — и мы перезвоним
            </p>
            {/* Декоративный элемент */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
          </div>

          {/* Правая часть */}
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg relative z-10 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
            >
              {/* Имя */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Имя"
                  className={`w-full h-12 sm:h-14 px-4 sm:px-5 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all ${
                    darkMode
                      ? "text-white bg-gray-700 border-gray-600"
                      : "text-black bg-[#F9FAFB] border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <span
                  className={`absolute top-1/2 -translate-y-1/2 right-4 ${
                    darkMode ? "text-gray-200" : "text-gray-400"
                  }`}
                >
                  👤
                </span>
              </div>

              {/* Телефон */}
              <div className="grid grid-cols-[100px,1fr] sm:grid-cols-[120px,1fr] gap-3 sm:gap-4">
                {/* Код страны */}
                <select
                  className={`w-full h-12 sm:h-14 px-4 sm:px-5 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all ${
                    darkMode
                      ? "text-white bg-gray-700 border-gray-600"
                      : "text-black bg-[#F9FAFB] border-gray-300"
                  }`}
                  defaultValue="+992"
                >
                  <option value="+7" className="flex items-center">
                    +7
                  </option>
                  <option value="+992" className="flex items-center">
                    +992
                  </option>
                </select>

                {/* Номер телефона */}
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className={`h-12 sm:h-14 w-full px-4 sm:px-5 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all ${
                      darkMode
                        ? "text-white bg-gray-700 border-gray-600"
                        : "text-black bg-[#F9FAFB] border-gray-300"
                    }`}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 right-4 ${
                      darkMode ? "text-gray-200" : "text-gray-400"
                    }`}
                  >
                    📞
                  </span>
                </div>
              </div>

              {/* Электронная почта */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Электронная почта"
                  className={`w-full h-12 sm:h-14 px-4 sm:px-5 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all ${
                    darkMode
                      ? "text-white bg-gray-700 border-gray-600"
                      : "text-black bg-[#F9FAFB] border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <span
                  className={`absolute top-1/2 -translate-y-1/2 right-4 ${
                    darkMode ? "text-gray-200" : "text-gray-400"
                  }`}
                >
                  ✉️
                </span>
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="h-12 sm:h-14 w-full md:w-auto px-6 sm:px-10 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
              >
                Отправить
              </button>

              {/* Политика конфиденциальности */}
              <p
                className={`text-xs sm:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Нажимая на кнопку, я соглашаюсь на{" "}
                <Link
                  href="#"
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } underline hover:text-purple-600 transition-colors`}
                >
                  обработку персональных данных
                </Link>{" "}
                и с{" "}
                <Link
                  href="#"
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } underline hover:text-purple-600 transition-colors`}
                >
                  правилами пользования Платформой
                </Link>
                .
              </p>
            </form>
            {/* Декоративный элемент */}
            <div className="absolute -top-8 -right-8 w-20 h-20 sm:w-24 sm:h-24 bg-purple-200 rounded-full blur-2xl opacity-50 z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200 rounded-full blur-2xl opacity-50 z-0"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
