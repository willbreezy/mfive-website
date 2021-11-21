import React, { useState } from 'react'
import{ init } from 'emailjs-com'
init("user_UpvOFDwJqh7qNlGiNLOrP")

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const isEmail =() => {
        let mail = document.getElementById('not-mail')
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

        if(email.match(regex)) {
            mail.style.display = 'none'
            return true
        } else {
            mail.style.display = 'block'
            mail.style.animation = 'dongle 1s'
            setTimeout(() => {
                mail.style.display = 'dongle 1s'
            }, 1000);
            return false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name && isEmail() && subject && message) {
            console.log('champs remplis avec succes')   
            setTimeout(() => {
                document.querySelector('.form-message').innerHTML = "Envoi réussi, bien vouloir consulter votre boite mail !"
            }, 1000);
            sendFeedback("template_du5bh1j", {
                name,
                email,
                subject,
                message
            })
        } else {
            console.log('bien vouloir remplir les champs correctement')
            document.querySelector('.form-message').innerHTML = "Echec d'envoi, veuillez réessayer !"
        }
    };

    const sendFeedback = (templateId, variables) => {

        window.emailjs
            .send("service_fyzqskd", templateId, variables)
            .then((res) => {
                console.log("success lors de l'envoi!")
                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
            })
            .catch(
                (err) =>
                    console.log("erreur lors de l'envoi"),
                    document.querySelector('.form-message').innerHTML = "Une erreur s'est produite, veuillez réessayer !"
            )
    }

    return (
        <section id={"contact"} className={"contact"}>
            <div className={"container"} data-aos="fade-up">

                <div className={"section-title"}>
                    <h2>Nous Contacter</h2>
                </div>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d497.4872520921439!2d9.
                    694951500000004!3d4.04123010000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!
                    2scm!4v1626732915292!5m2!1sfr!2scm"
                    title="MFC"
                    width="600" 
                    height="450" 
                    style={{border: 0 + 'em'}} 
                    allowfullscreen=""
                    loading="lazy"></iframe>
                </div>

                <div className={"row mt-5"}>

                    <div className={"col-lg-4"}>
                        <div className={"info"}>
                            <div className={"address"}>
                                <i className={"bi bi-geo-alt"}></i>
                                <h4>Situation géographique:</h4>
                                <p>Résidence La Colombe, Rue Dikoumé Bell, Bali, Douala - Cameroun</p>
                            </div>

                            <div className={"email"}>
                                <i className={"bi bi-envelope"}></i>
                                <h4>Email:</h4>
                                <p>mfivecorporation00@gmail.com</p>
                            </div>

                            <div className={"phone"}>
                                <i className={"bi bi-phone"}></i>
                                <h4>Contact:</h4>
                                <p>+237 233 420 564</p>
                            </div>

                        </div>
                    </div>

                    {/*Formulaire de contact*/}
                    <div className={"col-lg-8 mt-5 mt-lg-0"}>
                        <form className={"contact-form"}>
                            <div className={"row"}>
                                <div className={"col-md-6 form-group"}>
                                    <input type={"text"} className={"form-control"} id={"name"} name={"name"}
                                    placeholder={"Nom"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete={"off"}
                                    required />
                                </div>
                                <div className={"col-md-6 form-group mt-3 mt-md-3"}>
                                    <label id="not-mail">Email non valide</label>
                                    <input type={"email"} className={"form-control"} id={"email"} name={"email"}
                                    placeholder={"Email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete={"off"}
                                    aria-describedby="emailHelp"
                                    required />
                                </div>
                                <div className={"form-group mt-3"}>
                                    <input type={'text'} className={"form-control"} id={"subject"} name={"subject"}
                                    placeholder={"Sujet"}
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    autoComplete={"off"}
                                    />
                                </div>
                                <div className={"form-group mt-3"}>
                                    <textarea className={"form-control"} name={"message"} 
                                    rows={"5"}
                                    placeholder={"Message"}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    autoComplete={"off"}
                                    required />
                                </div>

                                <div className={"text-center"}>
                                    <input className="button" type="button" value="Envoyer" onClick={handleSubmit} />
                                <div className="form-message"></div>
                                </div>
                            </div>
                        </form>
                    </div>    
                </div>
            </div>
        </section>
    );
};

export default Contact;