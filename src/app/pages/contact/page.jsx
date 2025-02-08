"use client";

import Container from "@/app/components/shared/container/container";
import { useSettingStore } from "@/app/store/setting/useSettingStore";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactCard() {
  const { darkMode } = useSettingStore();

  return (
    <Container>
      <h1
        className={`lg:text-[60px] mt-[20px] max-w-[1088px] mx-auto sm:text-[36px] font-[700] pb-[40px] text-center ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Связаться с нами
      </h1>

      {/* Contact Cards */}
      {[
        {
          location: "Зарафшон",
          address: "ул. Алишера Навои",
          phone: "+992 554 16 16 16",
          email: "Partners@aliftech.net",
          mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928.948900810839!2d68.70912366904776!3d38.584693646241654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d20b06cb8629%3A0xbe5570e5f1981fb9!2z0JfQsNGA0LDRhNGI0L7QvSwg0JTRg9GI0LDQvdCx0LUsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1737910733349!5m2!1sru!2s",
        },
        {
          location: "Дангара",
          address: "ул. Рахим Чалил, 2.",
          phone: "+992 888 88 28 82",
          email: "Partners@aliftech.net",
          mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23877.13852267772!2d69.31789370204577!3d38.093494851999004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38c9df0a81a6bfdf%3A0x11374f209ab22985!2z0JTQsNC90LPQsNGA0LAsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1737911621345!5m2!1sru!2s",
        },
        {
          location: "Молодёжный театр",
          address: "ул. Рахим Чалил, 2.",
          phone: "+992 888 88 28 82",
          email: "Partners@aliftech.net",
          mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928.948900810839!2d68.70912366904776!3d38.584693646241654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d20b06cb8629%3A0xbe5570e5f1981fb9!2z0JfQsNGA0LDRhNGI0L7QvSwg0JTRg9GI0LDQvdCx0LUsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1737910733349!5m2!1sru!2s",
        },
      ].map((contact, index) => (
        <div
          key={index}
          className={`mt-[50px] p-8 rounded-2xl shadow-lg max-w-[1088px] mx-auto transition-all duration-300 hover:shadow-xl ${
            darkMode
              ? "bg-[#161F2D] text-gray-100"
              : "bg-[#EFF6FF] text-[#202d57]"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-center gap-4">
                <MapPin
                  className={`w-8 h-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
                <h2
                  className={`text-4xl font-bold ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {contact.location}
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
                  {contact.address}
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
                <div className="space-y-3">
                  <a
                    href={`tel:${contact.phone}`}
                    className={`flex items-center gap-3 transition-all duration-300 ${
                      darkMode
                        ? "text-gray-300 hover:text-gray-100"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <Phone className="w-6 h-6" />
                    <span>{contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className={`flex items-center gap-3 transition-all duration-300 ${
                      darkMode
                        ? "text-gray-300 hover:text-gray-100"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <Mail className="w-6 h-6" />
                    <span>{contact.email}</span>
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
                  className={`flex items-center gap-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Clock className="w-6 h-6" />
                  <p>По будням: 09:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] md:h-full rounded-xl overflow-hidden">
              <iframe
                src={contact.mapSrc}
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}