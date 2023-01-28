import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

import Alert from "./Alert";
import Select from "react-select";
import api from "../services/api";

import styles from './Form.module.scss';

const maskGenerator = createDefaultMaskGenerator('(99) 99999-9999');

export default function Form() {
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const [optionTypeCompany, setOptionTypeCompany] = useState([]);
  const [optionCountry, setOptionCountry] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (props) => {
    const { celular, telefone } = props;
    const phone = `+${telefone?.countryCode || '55'}${celular}`;
    
    const data = {
      ...props,
      celular: phone,
      telefone: phone
    }

    setDisabled(true);
    
    try {
      await api.post('QRCNContato', data);

      Alert.fire({
        icon: 'success',
        title: 'Formulário enviado!'
      });
  
      setDisabled(false);
    } catch (e) {
      Alert.fire({
        icon: 'error',
        title: 'Ouve um erro no envio'
      });

      setDisabled(false);
    }
  }

  const handleTypeCompany = async () => {
    const { data } = await api.get('QRCNTipoEmpresa/lista');
    setOptionTypeCompany(data.value);
  }

  const handleCountry = async () => {
    const { data } = await api.get('pais/lista');
    setOptionCountry(data.value);
  }

  useEffect(() => {
    handleTypeCompany();
    handleCountry();
  }, []);

  return (
    <aside className={styles.form}>
      <h1>Solicite uma demonstração</h1>
      <p>Preencha o formulário abaixo e um representante entrará em contato em breve.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input value="1" type="hidden" {...register("origemContatoID")} />
        <input value="1" type="hidden" {...register("idiomaID")} />

        <div className={styles.row}>
          <div>
            <label htmlFor="name">Nome</label>
            <input 
              id="name"
              type="text"
              placeholder="Informe o nome"
              { ...register("nome", {
                required: true,
                maxLength: "150"
              })}
            />
            {errors.nome?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
          </div>

          <div>
            <label htmlFor="last-name">Sobrenome</label>
            <input
              id="last-name"
              type="text"
              placeholder="Informe o sobrenome"
              { ...register("sobrenome", {
                required: true,
                maxLength: "150"
              })}
            />
            {errors.sobrenome?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label htmlFor="company">Empresa</label>
            <input
              placeholder="Informar empresa" 
              id="company"
              type="text"
              { ...register("empresa", {
                required: true,
                maxLength: "150"
              })}
            />
            {errors.empresa?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
          </div>

          <div>
            <label htmlFor="email">E-mail corporativo</label>
            <input
              id="email"
              type="text"
              placeholder="seuemail@aqui.com"
              { ...register("email", {
                required: true,
                maxLength: "150",
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              })}
            />
            {errors.email?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
            {errors.email?.type === 'pattern' && <p className={styles.alert} role="alert">E-mail inválido!</p>}
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label htmlFor="company-type">Tipo de empresa</label>
            <select
              id="company-type"
              { ...register("tipoEmpresaID", {
                required: true
              })}
            >
              <option value="">Selecione um tipo</option>
              {optionTypeCompany.map(({ id, description }) => (
                <option key={id} value={id}>{description}</option>
              ))}
            </select>
            {errors.tipoEmpresaID?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
          </div>

          <div>
            <label htmlFor="service">Cargo</label>
            <input
              id="service"
              type="text"
              placeholder="Seu cargo atual"
              { ...register("cargo", {
                required: true,
                maxLength: "60"
              })}
            />
            {errors.cargo?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
          </div>
        </div>

        <div className={styles.country}>
          <label htmlFor="phone">Informe o celular</label>
          <Controller
            control={control}
            name="celular"
            render={({ field: { onChange, value }}) => (
              <MaskedInput
                id="phone"
                onChange={onChange}
                value={value}
                placeholder="(00) 00000-0000"
                maskGenerator={maskGenerator}
                className={styles.countryInput}
              />
            )}
          />
          <Controller
            control={control}
            name="telefone"
            render={({ field: { onChange, ref }}) => (
              <Select
                options={optionCountry}
                inputRef={ref}
                onChange={onChange}
                value={optionCountry.find(({ countryCode }) => countryCode === '55')}
                formatOptionLabel={({ abbreviation, image }) => (
                  <div className={styles.countryBox}>
                    <img src={image} />
                    <span>{abbreviation}</span>
                  </div>
                )}
              />
            )}
          />
          {errors.celular?.type === 'required' || errors.telefone?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
        </div>

        <div className={styles.row}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Informe uma mensagem"
            { ...register("mensagem", {
              required: true,
              maxLength: "1024"
            })}
          ></textarea>
          {errors.mensagem?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
        </div>

        <div className={styles.row}>
          <label className={styles.checkbox} htmlFor="check">
            Concordo com os Termos e Condições e também com a proteção dos meus dados pessoais.
            <input
              id="check"
              type="checkbox"
              {...register("check", {
                required: true
              })}
            />
            <span className="checkmark"></span>
            {errors.check?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
          </label>
        </div>
        
        <button disabled={disabled} type="submit">Solicitar demonstração</button>
      </form>
    </aside>
  )
}