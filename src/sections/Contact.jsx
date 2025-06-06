import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = ({target: {name, value}}) =>{
        setForm({...form, [name]: value})
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();

        setLoading(true);

        try{
            await  emailjs.send("service_pddlyrl", "template_wnkagkn", {
                from_name: form.name,
                to_name: "Mr EXZ",
                from_email: form.email,
                to_email: "xbecomputer12345@gmail.com",
                message: form.message
            }, '0LmruIuBFnK0XKLHx')
            setLoading(false);
            alert("Message sent successfully")

            setForm({
                name: "",
                email: "",
                message: "",
            })
        }catch(e){
            setLoading(false);
            console.log(e)
            alert("An error occurred, Please try again")
        }
    }
  return (
    <section className="c-space my-20" id="contact">
  

    <div className="relative min-h-screen flex items-center justify-center flex-col">
      <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

      <div className="contact-container">
        <h3 className="head-text">Please talk to me</h3>
        <p className="text-lg text-white-600 mt-3">
         I would like to learn more about you and your project. Let's have a chat.
        </p>
  {/* Form */}
        <form  ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
          <label className="space-y-3">
            <span className="field-label">Full Name</span>
            <input
              type="text"
              name="name"
                value={form.name}
                onChange={handleChange}
              required
              className="field-input"
              placeholder="ex., Exz Ano"
            />
          </label>

          <label className="space-y-3">
            <span className="field-label">Email address</span>
            <input
              type="email"
              name="email"
                value={form.email}
                onChange={handleChange}
              required
              className="field-input"
              placeholder="ex., exz@gmail.com"
            />
          </label>

          <label className="space-y-3">
            <span className="field-label">Your message</span>
            <textarea
              name="message"
                value={form.message}
                onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="ex., Hi Exz, I would like to work with you on a project..."
            />
          </label>
          <button className="field-btn" type="submit" disabled={loading}> 
            {loading ? "Sending..." : "Send Message"}
           
            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact