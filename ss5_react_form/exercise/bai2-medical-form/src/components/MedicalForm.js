import React, {useState} from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import "./Medical.css";

export const MedicalForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            idCard: "",
            yearOfBirth: "",
            gender: "",
            national: "",
            workPlace: "",
            department: "",
            medicalInsurance: "",
            city: "",
            district: "",
            ward: "",
            address: "",
            phone: "",
            email: "",
            travel: "",
            symptom: [],
            meeting: [],
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Required"),
            idCard: Yup.string().required("Required"),
            yearOfBirth: Yup.string().required("Required")
                .min(1900, "year of birth must be over 1900"),
            national: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            district: Yup.string().required("Required"),
            ward: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
            phone: Yup.string().required("Required"),
            email: Yup.string().required("Required")
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/
                    , "Invalid email address"),
        }),
        onSubmit: () => {
            window.alert("Khai báo thành công!");
        }
    });

    return (
        <section>
            <form onSubmit={formik.handleSubmit} className="infoform">
                <label htmlFor="name">Họ tên</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                />
                {formik.errors.fullName && (
                    <p className="errorMsg">{formik.errors.fullName}</p>
                )}
                <label htmlFor="idCard">Số hộ chiếu/CMND</label>
                <input
                    type="text"
                    id="idCard"
                    name="idCard"
                    value={formik.values.idCard}
                    onChange={formik.handleChange}
                />
                {formik.errors.idCard && (
                    <p className="errorMsg">{formik.errors.idCard}</p>
                )}
                <label htmlFor="yearOfBirth">Năm sinh</label>
                <input
                    type="text"
                    id="yearOfBirth"
                    name="yearOfBirth"
                    value={formik.values.yearOfBirth}
                    onChange={formik.handleChange}
                />
                {formik.errors.yearOfBirth && (
                    <p className="errorMsg">{formik.errors.yearOfBirth}</p>
                )}
                <div style={{float: "left"}}>
                    <label htmlFor="">Giới tính</label>
                    <br/>
                    <input type="radio" id="male" name="gender"/>&nbsp;<label htmlFor="male">nam</label>
                    &emsp;
                    <input type="radio" id="female" name="gender"/>&nbsp;<label htmlFor="female">nữ</label>
                </div>
                <label htmlFor="national">Quốc tịch</label>
                <input
                    type="text"
                    id="national"
                    name="national"
                    value={formik.values.national}
                    onChange={formik.handleChange}
                />
                {formik.errors.national && (
                    <p className="errorMsg">{formik.errors.national}</p>
                )}
                <label htmlFor="workPlace">Công ty</label>
                <input
                    type="text"
                    id="workPlace"
                    name="workPlace"
                    value={formik.values.workPlace}
                    onChange={formik.handleChange}
                />
                {formik.errors.workPlace && (
                    <p className="errorMsg">{formik.errors.workPlace}</p>
                )}
                <label htmlFor="department">Bộ phận làm việc</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    value={formik.values.department}
                    onChange={formik.handleChange}
                />
                {formik.errors.department && (
                    <p className="errorMsg">{formik.errors.department}</p>
                )}
                <div>
                    <label htmlFor="medicalInsurance">Có thẻ bảo hiểm y tế</label>
                    <input
                        type="checkbox"
                        id="medicalInsurance"
                        name="medicalInsurance"
                        value={formik.values.medicalInsurance}
                        onChange={formik.handleChange}
                    />
                </div>
                <b>Địa chỉ liên lạc tại Việt Nam</b>
                <label htmlFor="city">Tỉnh thành</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                />
                {formik.errors.city && (
                    <p className="errorMsg">{formik.errors.city}</p>
                )}
                <label htmlFor="district">Quận/huyện</label>
                <input
                    type="text"
                    id="district"
                    name="district"
                    value={formik.values.district}
                    onChange={formik.handleChange}
                />
                {formik.errors.district && (
                    <p className="errorMsg">{formik.errors.district}</p>
                )}
                <label htmlFor="ward">Phường/Xã</label>
                <input
                    type="text"
                    id="ward"
                    name="ward"
                    value={formik.values.ward}
                    onChange={formik.handleChange}
                />
                {formik.errors.ward && (
                    <p className="errorMsg">{formik.errors.ward}</p>
                )}
                <label htmlFor="address">Số nhà, phố, tổ dân phố /thôn /đội</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                />
                {formik.errors.address && (
                    <p className="errorMsg">{formik.errors.address}</p>
                )}
                <label htmlFor="phone">Điện thoại</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />
                {formik.errors.phone && (
                    <p className="errorMsg">{formik.errors.phone}</p>
                )}
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && (
                    <p className="errorMsg">{formik.errors.email}</p>
                )}
                <div>
                    <label htmlFor="travel">Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào ?</label>
                    <br/>
                    <textarea
                        rows="10"
                        id="travel"
                        name="travel"
                        value={formik.values.travel}
                        onChange={formik.handleChange}
                    />
                </div>
                <div style={{float: "left"}}>
                    <label htmlFor="travel">Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây
                        ?</label>
                    <br/>
                    <input type="checkbox" id="sot" name="symptom"/>&nbsp;<label htmlFor="male">Sốt</label>
                    <br/>
                    <input type="checkbox" id="ho" name="symptom"/>&nbsp;<label htmlFor="female">Ho</label>
                    <br/>
                    <input type="checkbox" id="kho-tho" name="symptom"/>&nbsp;<label htmlFor="female">Khó Thở</label>
                    <br/>
                    <input type="checkbox" id="viem-phoi" name="symptom"/>&nbsp;<label htmlFor="female">Viêm Phổi</label>
                    <br/>
                    <input type="checkbox" id="dau-hong" name="symptom"/>&nbsp;<label htmlFor="female">Đau Họng</label>
                    <br/>
                    <input type="checkbox" id="met-moi" name="symptom"/>&nbsp;<label htmlFor="female">Mệt Mỏi</label>
                </div>
                <div style={{float: "left"}}>
                    <label htmlFor="travel">Trong vòng 14 ngày qua, Anh/Chị có tiếp súc với
                        ?</label>
                    <br/>
                    <input type="checkbox" id="sot" name="symptom"/>&nbsp;<label htmlFor="male">Người
                    bệnh
                    hoặc nghi ngờ mắc bệnh COVID-19</label>
                    <br/>
                    <input type="checkbox" id="ho" name="symptom"/>&nbsp;<label htmlFor="female">Người từ nước có
                    bệnh
                    COVID-19</label>
                    <br/>
                    <input type="checkbox" id="kho-tho" name="symptom"/>&nbsp;<label htmlFor="female">Người có biểu hiện(sốt
                    ho
                    khó thở viêm phổi đau họng mệt mỏi)</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}