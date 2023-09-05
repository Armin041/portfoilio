import * as Yup from "yup"


export const contactUsSchema = Yup.object().shape({

    fullname: Yup.string().required("وارد کردن نام و نام خانوادگی الزامی میباشد"),
    email: Yup.string().email("ایمیل وارد شده معتبر نمیباشد").required("وارد کردن ایمیل الزامی میباشد"),
    subject: Yup.string().required("موضوع الزامی میباشد"),
    message: Yup.string().required("متن پیام الزامی میباشد"),
    // recaptcha: Yup.string().required("ریکپچا الزامی میباشد")
})