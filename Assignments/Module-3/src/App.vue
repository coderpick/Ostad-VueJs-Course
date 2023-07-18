<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import bannerContent from "./data/bannerContent"
import clients from "./data/clients"
import weDoes from "./data/weDoes"
import teams from "./data/teams"
</script>

<template>
    <Navbar />
    <!-- banner section start -->
    <section class="w-full  bg-gradient-to-r from-green-400 to-blue-500 min-h-full pt-16">
        <div class="container m-auto">
            <div class="grid lg:grid-cols-2 gap-4">
                <div class="">
                    <div class="py-40">
                        <h1 class="text-6xl text-blue-600 leading-tight" v-html="bannerContent.title"></h1>
                        <p class="text-white text-xl py-5">{{ bannerContent.paragraph }}</p>
                        <a class="text-xl text-white border border-emerald-50 py-4 px-7 mt-6 inline-block rounded hover:bg-blue-700 hover:border-blue-700 font-medium uppercase"
                            href="#">{{ bannerContent.btnText }}</a>
                    </div>
                </div>
                <div class="flex items-center">
                    <img class="slogan-img" :src="bannerContent.featureImg" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- banner section end -->
    <!-- client section start -->
    <section class="bg-slate-200 w-full py-14">
        <div class="container m-auto">
            <div class="flex flex-wrap justify-center py-6">
                <h1 class="text-blue-800 text-3xl">Trusted By The Best Clients</h1>
            </div>
            <div class="flex justify-between py-6">
                <div v-for="(item, index) in clients" :key="index"><img class="h-[34px]" :src="item" alt=""></div>
            </div>
        </div>
    </section>
    <!-- client section end -->
    <!-- what we do start -->
    <section class="bg-white w-full py-14" id="weDo">
        <div class="container m-auto">
            <div class="flex justify-center py-6">
                <h1 class="text-blue-800 text-3xl">What We Do</h1>
            </div>
            <div class="grid grid-cols-3 gap-6 py-6">
                <div class="text-center px-4 border p-5 hover:shadow-md rounded">
                    <img :src="weDoes[0].icon" class="inline-block py-3" alt="">
                    <h2 class="text-2xl py-5 text-blue-900">{{ weDoes[0].title }}</h2>
                    <p>{{ weDoes[0].para }}</p>
                    <a href="" class="text-blue-600 mt-5 inline-block">Learn more</a>
                </div>
                <div class="text-center px-4 border p-5 hover:shadow-md rounded">
                    <img :src="weDoes[1].icon" class="inline-block py-3" alt="">
                    <h2 class="text-2xl py-5 text-blue-900">{{ weDoes[1].title }}</h2>
                    <p>{{ weDoes[1].para }}</p>
                    <a href="" class="text-blue-600 mt-5 inline-block">Learn more</a>
                </div>
                <div class="text-center px-4 border p-5 hover:shadow-md rounded">
                    <img :src="weDoes[2].icon" class="inline-block py-3" alt="">
                    <h2 class="text-2xl py-5 text-blue-900">{{ weDoes[2].title }}</h2>
                    <p>{{ weDoes[2].para }}</p>
                    <a href="" class="text-blue-600 mt-5 inline-block">Learn more</a>
                </div>

            </div>
        </div>
    </section>
    <!-- what we do end -->
    <!-- pricing section start -->
    <section class="bg-[#0a007e] w-full py-14" id="pricing">
        <div class="container m-auto">
            <div class="flex justify-center py-6">
                <h1 class="text-slate-400 text-3xl">Our Reliable Pricing</h1>
            </div>

            <div class="flex justify-center py-6">
                <h1 class="max-w-4xl text-center leading-snug text-white text-5xl font-bold">We build <span
                        class="text-[#00ffd4]">reliable infrastructure</span>, use comprehensive in-house tools.</h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 lg:grid-cols-3 place-items-center py-6">
                <!-- single price item start -->
                <div
                    class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">PRO</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        <span class="text-3xl font-semibold">$</span>
                        <span class="text-5xl font-extrabold tracking-tight">49</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3 items-center">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team
                                members</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud
                                storage</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration
                                help</span>
                        </li>
                        <li class="flex space-x-3 line-through decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
                        </li>
                        <li class="flex space-x-3 line-through decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
                        </li>
                        <li class="flex space-x-3 line-through decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                        </li>
                        <li class="flex space-x-3 line-through decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email
                                support</span>
                        </li>
                    </ul>
                    <button type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose
                        plan</button>
                </div><!-- single price item end -->
                <!-- single price item start -->
                <div
                    class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">PREMIUM</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        <span class="text-3xl font-semibold">$</span>
                        <span class="text-5xl font-extrabold tracking-tight">99</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3 items-center">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team
                                members</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud
                                storage</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration
                                help</span>
                        </li>
                        <li class="flex space-x-3 decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
                        </li>
                        <li class="flex space-x-3 decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
                        </li>
                        <li class="flex space-x-3 line-through decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                        </li>
                        <li class="flex space-x-3 line-through decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email
                                support</span>
                        </li>
                    </ul>
                    <button type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose
                        plan</button>
                </div><!-- single price item end -->
                <!-- single price item start -->
                <div
                    class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">ENTERPRISE</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        <span class="text-3xl font-semibold">$</span>
                        <span class="text-5xl font-extrabold tracking-tight">199</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3 items-center">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team
                                members</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud
                                storage</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration
                                help</span>
                        </li>
                        <li class="flex space-x-3  decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
                        </li>
                        <li class="flex space-x-3  decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
                        </li>
                        <li class="flex space-x-3  decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                        </li>
                        <li class="flex space-x-3  decoration-gray-500">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email
                                support</span>
                        </li>
                    </ul>
                    <button type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose
                        plan</button>
                </div><!-- single price item end -->


            </div>
        </div>
    </section>
    <!-- pricing section end -->
    <!-- team section start -->
    <section class="bg-slate-200 w-full py-14" id="ourTeam">
        <div class="container m-auto">
            <div class="flex justify-center py-6">
                <h1 class="text-blue-900 text-4xl font-bold">Meet Our Team</h1>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 lg:grid-cols-3 place-items-center py-6">

                <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="w-full rounded" :src="teams[0].profileImg" alt="" />
                    </a>
                    <div class="p-5 text-center">
                        <h1 class="text-2xl text-indigo-700">{{ teams[0].name }}</h1>
                        <h3 class="text-gray-600 py-2">{{ teams[0].designation }}</h3>
                    </div>
                </div>


                <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="w-full rounded" :src="teams[1].profileImg" alt="" />
                    </a>
                    <div class="p-5 text-center">
                        <h1 class="text-2xl text-indigo-700">{{ teams[1].name }}</h1>
                        <h3 class="text-gray-600 py-2">{{ teams[1].designation }}</h3>
                    </div>
                </div>

                <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="w-full rounded" :src="teams[2].profileImg" alt="" />
                    </a>
                    <div class="p-5 text-center">
                        <h1 class="text-2xl text-indigo-700">{{ teams[2].name }}</h1>
                        <h3 class="text-gray-600 py-2">{{ teams[2].designation }}</h3>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <!-- team section end -->

    <!-- openSource Section start -->
    <section class="bg-white w-full py-14">
        <div class="container m-auto">
            <div class="flex justify-center py-6">
                <h1 class="text-blue-900 text-3xl underline">We love Open Source</h1>
            </div>
            <div class="py-4 text-center">
                <div class="flex justify-center ">
                    <img src="../assets/img/open-source.svg" alt="">
                </div>
                <h1 class="text-6xl py-5 text-gray-700 font-bold">We're making <br> Open Source Software</h1>
                <a href="" class="text-xl py-4 px-5 mt-6 inline-block border border-gray-400 rounded">Follow us on
                    Github</a>
            </div>

        </div>
    </section>
    <!-- openSource Section end -->
    <Footer />
</template>

<style scoped></style>
