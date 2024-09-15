import Image from "next/image";
import Link from "next/link";


import comingsoon from "@/public/work/work.png";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: comingsoon,
      title: "Restuarant App",
      description: "An android application that can reserve foods in the resturant.",
      link: "",
      target: "_self",
    },
    {
      id: 2,
      image: comingsoon,
      title: "CakeShop App",
      description: "An android application that can order cake and customize cakes design.",
      link: "",
      target: "_self",
    },
    {
      id: 3,
      image: comingsoon,
      title: "PhotoBooking App",
      description: "An android application that can book PhotoBooking depend on the event.",
      link: "",
      target: "_self",
    },
    {
      id: 4,
      image: comingsoon,
      title: "Booking System",
      description: "A bookings & reservation management system that can manage the booking details, revenue, available rooms etc.",
      link: "",
      target: "_blank",
    },
    {
      id: 5,
      image: comingsoon,
      title: "Class Directory",
      description: "Static website for class schedule",
      link: "",
      target: "_blank",
    },
    {
      id: 6,
      image: comingsoon,
      title: "College Website",
      description: "Connected workspace where better, faster work happens.",
      link: "",
      target: "_blank",
    },
    {
      id: 7,
      image: comingsoon,
      title: "Portfolio",
      description: "Portfolio made using Next.js and Tailwind CSS",
      link: "",
      target: "",
    },
    {
      id: 8,
      image: comingsoon,
      title: "Epic Racing Game",
      description: "Race win against opponents be like No 1 in all 3 Rounds to Win the Levels , and Eliminate the Opponents.",
      link: "",
      target: "_self",
    },
    {
      id: 9,
      image: comingsoon,
      title: "Apparel Website",
      description: "An apparel website for advertising and managing online orders.",
      link: "",
      target: "_self",
    },

  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
