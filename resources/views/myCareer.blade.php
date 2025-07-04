@extends('layout.app')

@section('title')
    My Career
@endsection

@section('add-on')
    <link rel="stylesheet" href="./css/MyCareer.css">
@endsection

@section('content')
    <div class="body">
        <div>
            <p>Work at John Paul's School (2025-2030):</p>
            <div id="slider-myCareer" class="splide" role="group" aria-label="Splide Basic HTML Example">
                <div class="splide__track">
                    <div class="splide__arrows">
                        <button class="splide__arrow splide__arrow--prev">
                            <img src="img/arrowLeft.png" alt="">
                        </button>
                        <button class="splide__arrow splide__arrow--next">
                            <img src="img/arrowRight.png" alt="">
                        </button>
                    </div>
                    <ul class="splide__list">
                        <li class="splide__slide"><div class="imageWrap" style="background-image: url('img/undraw_professor_xcrw.png');"></div></li>
                        <li class="splide__slide"><div class="imageWrap" style="background-image: url('img/undraw_mathematics_hc2c.png');"></div></li>
                    </ul>
                </div>
            </div>
            <p>2025-2030</p>
        </div>
        <div>
            <p>Work at Ascendeum Remote Company (2026-2030):</p>
            <div id="slider-myCareer" class="splide" role="group" aria-label="Splide Basic HTML Example">
                <div class="splide__track">
                    <div class="splide__arrows">
                        <button class="splide__arrow splide__arrow--prev">
                            <img src="img/arrowLeft.png" alt="">
                        </button>
                        <button class="splide__arrow splide__arrow--next">
                            <img src="img/arrowRight.png" alt="">
                        </button>
                    </div>
                    <ul class="splide__list">
                        <li class="splide__slide"><div class="imageWrap" style="background-image: url('img/undraw_mathematics_hc2c.png');"></div></li>
                        <li class="splide__slide"><div class="imageWrap" style="background-image: url('img/undraw_professor_xcrw.png');"></div></li>
                    </ul>
                </div>
            </div>
            <p>2026-2030</p>
        </div>
    </div>
@endsection