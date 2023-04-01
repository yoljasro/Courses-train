import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AboutSelf } from "../components/AboutSelf";
import styles from './Header/main.module.sass'

import Link from "next/link";

export const  Courses =() => {
  const courses = [
    {
      id: 1,
      image: "/img/bio.webp",
      title: "Biologiya",
      description:
        "Biologiya, hayvonlar va bitkilarning hayoti, tuzilmasi, rivojlanishi va ozaro aloqalari haqida ilmni organadi.",
    },
    {
      id: 2,
      image: "/img/math.jpg",
      title: "Matematika",
      description:
        "Matematika, raqamli algoritmlarni va modellarini yaratish, tahlil qilish va ilgari korish bilan bogliq fan.",
    },
    {
      id: 3,
      image: "/img/kimyo.jpg",
      title: "Kimyo",
      description:
        "Kimyo, asosan molekulyar tuzilma va kimyoviy aloqalar bilan bogliq fan. Bu, kimyoviy hodisalar, kimyoviy komponentlar, ularning tuzilishi va xossalari, ularning rivojlanishi, tahlil qilinishi va shu bilan bogliq.",
    },
    {
      id: 4,
      image: "/img/ona.jpg",
      title: "Ona-tili",
      description:
        "Ona tili, ozbek tili haqida tushunchalar, uslublar va uning tarixiy rivojlanishi, ona tili tuzilishi, fonetik va grammatik xossalari va boshqalar haqida ilmni organadi.",
    },
    {
      id: 5,
      image: "/img/adabiyot.jpg",
      title: "Adabiyot",
      description:
        "Adabiyot, ilmiy, estetik va sotsial huquqni yodgorlik bilan birlashtiradigan odamlarning axloqiy tuygulari, fikrlari, sanati, tabiiyat manzaralari va boshqa muhitni tavsifi, nutq, nashriyot va boshqa sanatlar uslublariga asoslangan shaxsiylik va shaxsiylikka xos maxsulotlarni qamrab olish va tahlil qilish bilan bogliq fan.",
    },
    {
      id: 6,
      image: "/img/rus.jpg",
      title: "Rus-tili",
      description:
        "Rus tili, rus tilining tuzilishi, fonetik va grammatik xossalari, uslublari, soz sanati, lugat, tarixi va boshqalar haqida ilmni organadi.",
    },
    {
      id: 7,
      image: "/img/fizi.jfif",
      title: "Fizika",
      description:
        "Fizika, tabiiy obektlarning xossalari va ularning ozaro aloqalarini organish, nazariy va amaliy fan.",
    },
    {
      id: 8,
      image: "/img/english.jpg",
      title: "Ingliz-tili",
      description:
        "Ingliz tili, ingliz tili fonetikasi va grammatikasi, yozish va gapirish uslublari, nutq sanati, tarixi va boshqalar haqida ilmni organadi.",
    },
  ];
  return (
    <>
      <div className={styles.courses}>
        {courses.map((course) => (
            <a target={'_blank'} href={'/biology'}>
          <div className={styles.courses__card} key={course.id}>
            <img src={course.image} className={styles.courses__img} alt={course.title} />
            <div className="info">
              <h3 className={styles.courses__title}>{course.title}</h3>
              <p className={styles.courses__description}>{course.description}</p>
            </div>
          </div>
          </a>
        ))}
      </div>

    </>
  );
}
