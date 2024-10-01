import Image from "next/image";
import profileimg from "../images/My-picture.jpg"; // Ensure this path is correct

const Profile = () => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <Image
        src={profileimg}
        alt="Profile"
        width={128} // Set appropriate width
        height={128} // Set appropriate height
        className="rounded-full" // You can keep styling like rounded-full
      />
      <div className="text-gray-800">
        <h3 className="text-2xl font-semibold">Abdul Waheed</h3> {/* Update with your name */}
        <p className="text-gray-600">
        I am a passionate student of Generative AI, currently enrolled in GIAIC's Q2 program (slot 9 to 12 on Sundays, Roll No: 00193897). I am also advancing my skills in the PIAIC Q3 program. With a solid foundation in TypeScript, Next.js, and Python, I am continuously exploring cutting-edge technologies to build innovative projects and improve my expertise in AI-driven solutions.</p> {/* Update with your description */}
      </div>
    </div>
  );
};

export default Profile;
