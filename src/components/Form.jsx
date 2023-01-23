import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Select from "react-select";
import api from "../services/api";

import styles from './Form.module.scss';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [optionTypeCompany, setOptionTypeCompany] = useState([]);
  const [optionCountry, setOptionCountry] = useState([]);
  
  const onSubmit = async (data) => {
    // const result = await api.post('QRCNContato', data);
    console.log(data, 'testre');
  }

  const handleTypeCompany = async () => {
    // const data = await api.get('QRCNTipoEmpresa/lista');

    const data = {
      value: [{
        id: 1,
        description: "Transitário"
      }, {
        id: 2,
        description: "Portos e Terminais"
      }, {
        id: 3,
        description: "Importador/Exportador"
      }]
    }

    setOptionTypeCompany(data.value);
  }

  const handleCountry = async () => {
    // const data = await api.get('pais/lista');

    const data = {
      value: [{
        id:8,
        name:"Andorra",
        abbreviation:"AD",
        countryCode:"376",
        locode:"AD",
        image:"https://apps.datamar.com.br/new/img/flag/AD.png"
      },{
        id:235,
        name:"Emirados Árabes Unidos",
        abbreviation:"AE",
        countryCode:"971",
        locode:"AE",
        image:"https://apps.datamar.com.br/new/img/flag/AE.png"
      },{
        id:4,
        name:"Afeganistão",
        abbreviation:"AF",
        countryCode:"93",
        locode:"AF",
        image:"https://apps.datamar.com.br/new/img/flag/AF.png"
      }]
    }

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
          <input
            placeholder="(00) 00000-0000"
            id="phone"
            type="text"
            className={styles.countryInput}
            { ...register("celular", {
              required: true,
              maxLength: "50"
            })}
          />
          <Select
            {...register("telefone", {
              required: true
            })}
            options={optionCountry}
            formatOptionLabel={({ countryCode, abbreviation, image }) => (
              <div className={styles.countryBox} value={countryCode}>
                <img src={image} />
                <span>{abbreviation}</span>
              </div>
            )}
          />
          {errors.celular?.type === 'required' && <p className={styles.alert} role="alert">Campo obrigatório!</p>}
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
            />
            <span className="checkmark"></span>
          </label>
        </div>
        
        <button type="submit">Solicitar demonstração</button>
      </form>
    </aside>
  )
}