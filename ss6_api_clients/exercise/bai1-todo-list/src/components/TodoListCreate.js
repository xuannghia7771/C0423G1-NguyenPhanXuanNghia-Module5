import {useFormik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import * as todoListService from "../service/TodoListService";
import {toast} from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";

export function TodoListCreate() {
    const navigate = useNavigate();

    const createNew = async (data) => {
        const res = await todoListService.create(data);
        if (res.status === 201) {
            navigate("/todo");
            toast("Create successfully!");
        } else {
            toast.error("Create failed");
        }
    }

    const formik = useFormik({
        initialValues: {
            id: "",
            userId: "",
            title: "",
            completed: true
        },
        validationSchema: Yup.object({
            id: Yup.number().required("Required"),
            userId: Yup.number().required("Required"),
            title: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            createNew(values);
        }
    });

    return (
        <div>
            <h1>New To-do</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        className="form-control"
                    />
                    {formik.errors.id && (
                        <p>{formik.errors.id}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="userId">User ID</label>
                    <input
                        type="text"
                        id="userId"
                        name="userId"
                        value={formik.values.userId}
                        onChange={formik.handleChange}
                        className="form-control"
                    />
                    {formik.errors.userId && (
                        <p>{formik.errors.userId}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        className="form-control"
                    />
                    {formik.errors.title && (
                        <p>{formik.errors.title}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="completed">Completed</label>
                    &nbsp;
                    <select id="completed" onChange={formik.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    {formik.errors.title && (
                        <p>{formik.errors.title}</p>
                    )}
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}