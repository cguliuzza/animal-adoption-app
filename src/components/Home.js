import React from 'react'
import { Carousel } from 'react-bootstrap'
import webinar from "/Users/sakiona1/Phase-2-Project/animal-adoption-app/src/images/Free-Webinar-training-dog-to-meet-new-people.png"
import dogsWalking from "/Users/sakiona1/Phase-2-Project/animal-adoption-app/src/images/dogs-on-a-walk.jpeg"
import adoptionExperience from "/Users/sakiona1/Phase-2-Project/animal-adoption-app/src/images/Adoption Experience Cat.png"

const Home = () => {
    return (
        <div>
            <Carousel className="carousel-element">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                        <img src={webinar} className="d-block w-100" alt="free webinar" />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <img src={dogsWalking} className="d-block w-100" alt="two dogs running" />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <img src={adoptionExperience} className="d-block w-100" alt="adoption experience list with cat" />
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