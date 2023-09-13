import Link from "next/link"
export default function Header() {
    return (
        <>

            <nav class="bg-white border-gray-200 light:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" class="flex items-center">
                        <svg width="58" height="79" viewBox="0 0 58 79" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 mr-3">
                            <rect x="5.91125" y="31.8549" width="10.6183" height="47.1452" rx="5.30914" fill="#2978A0" />
                            <g filter="url(#filter0_d_3_38)">
                                <rect x="35.3098" y="67.3969" width="10.6183" height="44.2283" rx="5.30914" transform="rotate(150 35.3098 67.3969)" fill="#2978A0" />
                            </g>
                            <g filter="url(#filter1_d_3_38)"> 
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9503 10.6651C50.5872 14.6115 51.9946 19.2511 51.9946 23.9973H42.6502C42.5931 16.0121 36.1022 9.55643 28.1035 9.55643C20.0694 9.55643 13.5564 16.0694 13.5564 24.1035C13.5564 32.1022 20.0121 38.5931 27.9973 38.6501V47.9946C23.2511 47.9946 18.6115 46.5872 14.6651 43.9504C10.7188 41.3135 7.643 37.5656 5.8267 33.1807C4.0104 28.7958 3.53517 23.9707 4.46111 19.3157C5.38705 14.6607 7.67258 10.3847 11.0287 7.02866C14.3847 3.67258 18.6607 1.38705 23.3157 0.461112C27.9707 -0.464829 32.7958 0.0103976 37.1807 1.8267C41.5656 3.643 45.3135 6.71879 47.9503 10.6651Z" fill="#0D2149" />
                            </g>
                            <g filter="url(#filter2_d_3_38)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.74313 37.5419C7.10628 33.5955 5.69886 28.9559 5.69886 24.2097L13.5568 24.2097C13.6139 32.195 20.1048 38.6506 28.1035 38.6506C36.1376 38.6506 42.6505 32.1377 42.6505 24.1036C42.6505 16.6077 36.981 10.436 29.6962 9.64273L29.6962 0.212374C34.4424 0.212374 39.082 1.61979 43.0284 4.25665C46.9747 6.89351 50.0505 10.6414 51.8668 15.0263C53.6831 19.4112 54.1583 24.2363 53.2324 28.8913C52.3064 33.5463 50.0209 37.8223 46.6648 41.1783C43.3087 44.5344 39.0328 46.8199 34.3778 47.7459C29.7228 48.6718 24.8977 48.1966 20.5128 46.3803C16.1279 44.564 12.38 41.4882 9.74313 37.5419Z" fill="#2978A0" />
                            </g>
                            <defs>
                                <filter id="filter0_d_3_38" x="1.94238" y="31.0365" width="35.425" height="47.7272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_38" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_38" result="shape" />
                                </filter>
                                <filter id="filter1_d_3_38" x="0" y="0" width="55.9946" height="55.9946" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_38" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_38" result="shape" />
                                </filter>
                                <filter id="filter2_d_3_38" x="1.69885" y="0.212372" width="55.9946" height="55.9946" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_38" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_38" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </Link>
                    <div class="flex md:order-2">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-light bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">View resumes</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create resume</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dasboard</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}