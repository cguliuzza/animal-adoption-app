import React from 'react'
import { Carousel } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Carousel className="carousel-element">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpeG-v3apuTCERMYpAfPnAOYQ56JVnApSBA&usqp=CAU" className="d-block w-100" alt="dog on home page" />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxROFCYDN6CQPPIC1UiHPsOWuAHATC3fHqDA&usqp=CAU" className="d-block w-100" alt="horse on home page" />
                        </div>
                        <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4it_Jqeo2FMOA-0f2yJk5uYJ3YTa1j7MVSA&usqp=CAU" className="d-block w-100" alt="cat on home page" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </Carousel>
        </div>
    )
}

export default Home
