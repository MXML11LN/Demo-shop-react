import React,{ useState } from "react"

export const Testimonials = () => {

    const arrTestimonials = [
        {
            name:"Jack",
            text:"Всі відеоогляди в ютубі говорять про те, що самсон робить тренд на рік вперед по дизайну, камерам і т.д. Практика телефонів : у мене і дружини j7, на сьогодні - А9, А71. "
        },
        {
            name:"Jinna",
            text:"Dовго вибирав телефон собі. Вибирав між 10S Lite і А71. Зупинився на А71, так як різниці практично нема."
        }, 
    ]

    const [testimonials, setTestimonials] = useState(arrTestimonials);

    const [newTestimonials, setNewTestimonials] = useState({
        name:"",
        text:"",
    });

    const handleNameChange = (e) => (
        setNewTestimonials(value => ({
            ...value,
            name:e.target.value
        }))
    )

    const handleTextChange = (e) => (
        setNewTestimonials(value => ({
            ...value,
            text:e.target.value
        }))
    )
    
    const onSend = (e) => {
        e.preventDefault();
        setNewTestimonials({
            name:"",
            text:"",
        })
        setTestimonials(value => {
            return [...value,newTestimonials]
        })
    }

    return(
        <>
            <h2 className="page-title">Testimonials</h2>
            {
                testimonials.map((item,index) => 
                    <div style={{
                        backgroundColor:"rgba(255,255,255,0.6)",
                        padding:"10px",
                        borderRadius:"0.95em",
                        marginBottom:"15px",
                    }} key={index}>
                        <div style={{
                            marginBottom:"15px",
                            backgroundColor:"rgba(255,255,255,0.9)",
                            padding:"10px",
                            borderRadius:"0.95em",
                            display:"inline-block"
                            }}>Name: {item.name}</div>
                        <div style={{
                            backgroundColor:"rgba(255,255,255,0.9)",
                            padding:"10px",
                            borderRadius:"0.95em",
                            }}>Message:{item.text}</div>
                    </div>)
            }
            <hr style={{
                margin:"25px 0"
            }
            }/>
            <form style={{
                        backgroundColor:"rgba(255,255,255,0.6)",
                        padding:"10px",
                        borderRadius:"0.95em",
                        marginBottom:"15px",
                    }}
            
            onSubmit={onSend}>
                <div>
                    <input
                        style={{
                            marginBottom:"15px",
                            backgroundColor:"rgba(255,255,255,0.9)",
                            padding:"10px",
                            borderRadius:"0.95em",
                            display:"inline-block",
                            outline:"none",
                            }}
                        type="text"
                        placeholder="Your Name"
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>    
                    <textarea
                        style={{
                            backgroundColor:"rgba(255,255,255,0.9)",
                            padding:"10px",
                            borderRadius:"0.95em",
                            marginBottom:"15px",
                            outline:"none",
                            }}
                        placeholder="Your Comment"
                        cols={50} rows={10}
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                    />
                </div>
                <button
                    style={{
                        backgroundColor:"rgba(255,255,255,0.9)",
                        padding:"10px"
                    }}
                >Leave your comment</button>
            </form>


        </>
    ) 
}