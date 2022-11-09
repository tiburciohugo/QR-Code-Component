import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>QR Code Component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div class="w-screen h-screen font-poppins">
        <div class="bg-white p-4 rounded-lg h-[32rem] my-16 mx-auto w-80 max-w-sm flex flex-col">
          <div class="bg-blue-300 w-full h-1/2 rounded-lg">
            <Image
              src="/image-qr-code.png"
              alt="qrcode"
              class="rounded-lg object-center"
              width={300}
              height={300}
            />
          </div>
          <div class="w-[90%] mx-auto my-14 flex flex-col justify-center items-center">
            <h2 class="text-center text-lg font-bold mt-4">
              Improve your front-end skills by building projects
            </h2>
            <p class="text-center mt-4 text-sm text-gray-500">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
