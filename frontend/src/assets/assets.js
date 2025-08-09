import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Satoshi Tanaka',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MD',
        experience: '8 Years',
        about: 'Dr. Tanaka is dedicated to providing comprehensive care with a focus on preventive medicine and early diagnosis. With a warm and respectful approach, he values building trust with each patient and supporting the health of the local community.',
        fees: 6000, // in yen
        address: {
            line1: 'Jinnan 1-chome, Shibuya-ku',
            line2: 'Sakura Street Clinic Building 2F, Tokyo'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Haruka Suzuki',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '6 Years',
        about: 'Dr. Suzuki is committed to supporting women’s health throughout all stages of life. She creates a safe and comfortable environment for consultations, combining attentive listening with advanced medical care.',
        fees: 7500,
        address: {
            line1: 'Kawaramachi Street, Nakagyo-ku',
            line2: 'Ouka Medical Center 5F, Kyoto'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Yumi Nakamura',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Nakamura focuses on both the health and beauty of the skin. She provides careful diagnoses and personalized advice, helping patients achieve healthy skin that radiates from within.',
        fees: 5000,
        address: {
            line1: 'Umeda 1-chome, Kita-ku',
            line2: 'Kouka Skin Clinic 8F, Osaka'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Taro Yamamoto',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MD',
        experience: '5 Years',
        about: 'Dr. Yamamoto specializes in caring for children’s health and well-being. With a friendly and gentle demeanor, he ensures that both children and parents feel comfortable during visits.',
        fees: 5500,
        address: {
            line1: 'Minatomirai 3-chome, Nishi-ku',
            line2: 'Mirai Kids Clinic, Yokohama'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Aiko Fujimoto',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '9 Years',
        about: 'Dr. Fujimoto is dedicated to diagnosing and treating neurological conditions with precision and compassion. She values a patient-centered approach and offers clear, thorough explanations.',
        fees: 8000,
        address: {
            line1: 'Higashiyama 2-chome',
            line2: 'Kiyomizu Medical Tower 6F, Kyoto'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Hiroshi Kobayashi',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '7 Years',
        about: 'Dr. Kobayashi combines advanced medical knowledge with a respectful, considerate manner. He works closely with patients to create tailored treatment plans.',
        fees: 8200,
        address: {
            line1: 'Tenjinbashi 4-chome, Kita-ku',
            line2: 'Seiryu Neurology Center 3F, Osaka'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Akiko Yamashita',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MD',
        experience: '10 Years',
        about: 'Dr. Sakamoto values harmony and trust in the doctor-patient relationship. Her practice focuses on preventive care and holistic wellness.',
        fees: 6200,
        address: {
            line1: 'Ginza 5-chome, Chuo-ku',
            line2: 'Hikari Medical Clinic 4F, Tokyo'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Naomi Takahashi',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '5 Years',
        about: 'Dr. Takahashi provides compassionate gynecological care in a discreet and welcoming environment. She prioritizes patient comfort and understanding.',
        fees: 7700,
        address: {
            line1: 'Sannomiya-cho, Chuo-ku',
            line2: 'Haruka Women’s Health Center 2F, Kobe'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Mei Kondo',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MD',
        experience: '3 Years',
        about: 'Dr. Kondo offers attentive skin care services, addressing both medical and cosmetic needs with precision and warmth.',
        fees: 5200,
        address: {
            line1: 'Motomachi, Naka-ku',
            line2: 'Hana Skin & Beauty Clinic, Yokohama'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Ryo Shimizu',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Shimizu provides gentle, child-friendly medical care, ensuring that young patients feel safe and supported during each visit.',
        fees: 5600,
        address: {
            line1: 'Nishijin, Sawara-ku',
            line2: 'Sunrise Pediatrics 1F, Fukuoka'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Ayaka Mori',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '6 Years',
        about: 'Dr. Mori approaches neurological care with precision and empathy. She ensures her patients fully understand their conditions and treatment plans.',
        fees: 7800,
        address: {
            line1: 'Sakae 3-chome, Naka-ku',
            line2: 'Nagoya Neuro Clinic 7F, Nagoya'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Takumi Hayashi',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '8 Years',
        about: 'Dr. Hayashi is known for his careful and methodical approach to neurological medicine, ensuring the highest standards of care.',
        fees: 8000,
        address: {
            line1: 'Odori Nishi 5-chome',
            line2: 'Snowflake Medical Center 4F, Sapporo'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Hana Ishikawa',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MD',
        experience: '7 Years',
        about: 'Dr. Ishikawa offers holistic general care with an emphasis on preventive health and patient education. She builds long-term trust with her patients.',
        fees: 6100,
        address: {
            line1: 'Naha-shi, Kumoji 2-chome',
            line2: 'Ryukyu Medical Plaza 2F, Okinawa'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Yuta Okada',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '5 Years',
        about: 'Dr. Okada ensures that every patient feels at ease, combining advanced gynecological care with a warm and respectful manner.',
        fees: 7600,
        address: {
            line1: 'Hiroshima-shi, Naka-ku Hondori',
            line2: 'Momiji Women’s Clinic 3F, Hiroshima'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Keiko Matsumoto',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Matsumoto focuses on delivering tailored skin treatments that enhance both health and appearance, with an emphasis on patient comfort.',
        fees: 5400,
        address: {
            line1: 'Kanazawa-shi, Higashiyama',
            line2: 'Sakura Skin Care Center 5F, Kanazawa'
        }
    }
];
