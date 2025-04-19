"use client"

import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

import useAlert from "../hooks/useAlert"
import Alert from "../components/Alert"
import TitleHeader from "../components/TitleHeader"
import ContactExperience from "../components/ContactExperience"
import Button from "../components/Button"

const Contact = () => {
  const formRef = useRef()

  const { alert, showAlert, hideAlert } = useAlert()
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Akhil Shetty M",
          from_email: form.email,
          to_email: "akhilshettym2003@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false)
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          })

          setTimeout(() => {
            hideAlert(false)
            setForm({
              name: "",
              email: "",
              message: "",
            })
          }, [3000])
        },
        (error) => {
          setLoading(false)
          console.error(error)

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          })
        },
      )
  }

  return (
    <section className="c-space my-20" id="contact">
      <TitleHeader
        title="Forge a Connection"
        sub="Have questions or ideas? Let's talk! I'm here to help with your projects."
      />
      {alert.show && <Alert {...alert} />}

      <div className="mt-12 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className="relative p-8 bg-black-200 border border-black-300 rounded-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-7">
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., Akhil Shetty M"
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
                  placeholder="ex., akhilshettym2003@gmail.com"
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
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <Button name="Start Conversation" isBeam containerClass="w-fit transition-transform hover:scale-105"
              type="submit"
              disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              </Button>               

            </form>
          </div>
        </div>

        <div className="lg:col-span-7 min-h-[500px]">
          <div className="w-full h-full bg-[#1c1c21] rounded-lg overflow-hidden hover:cursor-grab">
            <ContactExperience />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;