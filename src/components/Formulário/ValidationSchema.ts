import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome deve ter, no mínimo, 3 letras")
    .required("Campo obrigatório"),
  date: Yup.string()
    .min(6, "Data deve ter, no mínimo, 6 numeros")
    .max(10, "Data deve ter, no maximo, 10 caracteres")
    .matches(/^([0-9]{2}) [0-9]{2} [0-9]{4}$/, "Preencha dia, mês e ano")
    .required("Campo obrigatório"),
});

export { schema };
