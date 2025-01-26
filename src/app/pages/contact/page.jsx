"use client";

import Container from "@/app/components/shared/container/container";
import { useSettingStore } from "@/app/store/setting/useSettingStore";
import { MapPin, Phone, Mail, Clock } from "lucide-react"; // Import icons from lucide-react

export default function ContactCard() {
  const { darkMode } = useSettingStore();

  return (
    <Container>
      <div
        className={`mt-[50px] p-6 rounded-2xl shadow-md max-w-[1088px] m-auto ${
          darkMode ? "bg-[#161F2D] text-gray-100" : "bg-[#EFF6FF] text-[#202d57]"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin
                className={`w-6 h-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
              <h2
                className={`text-4xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Зарафшон
              </h2>
            </div>

            {/* Address */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Адрес
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                ул. Алишера Навои
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Контакты
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+992554161616"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  +992 554 16 16 16
                </a>
                <a
                  href="mailto:Partners@aliftech.net"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  Partners@aliftech.net
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Режим работы
              </h3>
              <div
                className={`flex items-center gap-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <Clock className="w-5 h-5" />
                <p>По будням: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928.948900810839!2d68.70912366904776!3d38.584693646241654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d20b06cb8629%3A0xbe5570e5f1981fb9!2z0JfQsNGA0LDRhNGI0L7QvSwg0JTRg9GI0LDQvdCx0LUsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1737910733349!5m2!1sru!2s"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div
        className={`mt-[50px] p-6 rounded-2xl shadow-md max-w-[1088px] m-auto ${
          darkMode ? "bg-[#161F2D] text-gray-100" : "bg-[#EFF6FF] text-[#202d57]"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin
                className={`w-6 h-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
              <h2
                className={`text-4xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Дангара
              </h2>
            </div>

            {/* Address */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Адрес
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                ул. Рахим Чалил, 2.
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Контакты
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+992554161616"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  +992 888 88 28 82
                </a>
                <a
                  href="mailto:Partners@aliftech.net"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  Partners@aliftech.net
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Режим работы
              </h3>
              <div
                className={`flex items-center gap-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <Clock className="w-5 h-5" />
                <p>По будням: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23877.13852267772!2d69.31789370204577!3d38.093494851999004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38c9df0a81a6bfdf%3A0x11374f209ab22985!2z0JTQsNC90LPQsNGA0LAsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1737911621345!5m2!1sru!2s"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div
        className={`mt-[50px] p-6 rounded-2xl shadow-md max-w-[1088px] m-auto ${
          darkMode ? "bg-[#161F2D] text-gray-100" : "bg-[#EFF6FF] text-[#202d57]"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin
                className={`w-6 h-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
              <h2
                className={`text-4xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Молодёжный театр
              </h2>
            </div>

            {/* Address */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Адрес
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                ул. Рахим Чалил, 2.
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Контакты
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+992554161616"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  +992 888 88 28 82
                </a>
                <a
                  href="mailto:Partners@aliftech.net"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  Partners@aliftech.net
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Режим работы
              </h3>
              <div
                className={`flex items-center gap-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <Clock className="w-5 h-5" />
                <p>По будням: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928.948900810839!2d68.70912366904776!3d38.584693646241654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d20b06cb8629%3A0xbe5570e5f1981fb9!2z0JfQsNGA0LDRhNGI0L7QvSwg0JTRg9GI0LDQvdCx0LUsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1737910733349!5m2!1sru!2s"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div
        className={`mt-[50px] p-6 rounded-2xl shadow-md max-w-[1088px] m-auto ${
          darkMode ? "bg-[#161F2D] text-gray-100" : "bg-[#EFF6FF] text-[#202d57]"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin
                className={`w-6 h-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
              <h2
                className={`text-4xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Зарафшон
              </h2>
            </div>

            {/* Address */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Адрес
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                ул. Рахим Чалил, 2.
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Контакты
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+992554161616"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  +992 888 88 28 82
                </a>
                <a
                  href="mailto:Partners@aliftech.net"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  Partners@aliftech.net
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Режим работы
              </h3>
              <div
                className={`flex items-center gap-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <Clock className="w-5 h-5" />
                <p>По будням: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928.948900810839!2d68.70912366904776!3d38.584693646241654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d20b06cb8629%3A0xbe5570e5f1981fb9!2z0JfQsNGA0LDRhNGI0L7QvSwg0JTRg9GI0LDQvdCx0LUsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1737910733349!5m2!1sru!2s"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div
        className={`mt-[50px] p-6 rounded-2xl shadow-md max-w-[1088px] m-auto ${
          darkMode ? "bg-[#161F2D] text-gray-100" : "bg-[#EFF6FF] text-[#202d57]"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin
                className={`w-6 h-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
              <h2
                className={`text-4xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Зарафшон
              </h2>
            </div>

            {/* Address */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Адрес
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                ул. Рахим Чалил, 2.
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Контакты
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+992554161616"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  +992 888 88 28 82
                </a>
                <a
                  href="mailto:Partners@aliftech.net"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  Partners@aliftech.net
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Режим работы
              </h3>
              <div
                className={`flex items-center gap-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <Clock className="w-5 h-5" />
                <p>По будням: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928.948900810839!2d68.70912366904776!3d38.584693646241654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d20b06cb8629%3A0xbe5570e5f1981fb9!2z0JfQsNGA0LDRhNGI0L7QvSwg0JTRg9GI0LDQvdCx0LUsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1737910733349!5m2!1sru!2s"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}
