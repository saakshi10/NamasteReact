import { useState } from "react";

const Section = ({
    title,
    description,
    showDescription,
    showDetailSection,
}) => {
    return (
        <div className="border border-black p-2 m-2">
            <div className="flex justify-between">
                <h3 className="font-bold text-xl">{title}</h3>
                <button
                    className="cusror-pointer border rounded-md bg-green-700 text-white p-2"
                    onClick={() => showDetailSection(!showDescription)}
                >
                    {!showDescription ? "Show" : "Hide"}
                </button>
            </div>
            {showDescription && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    // not a good way to code, keeping the status of all visibility
    // const [sectionConfig, setSectionConfig] = useState({
    //     showAbout: false,
    //     showTeam: false,
    //     showCareer: false,
    //     showProducts: false,
    //     showPrice: false,
    // });

    const [visibleSection, setVisibleSection] = useState("");

    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold"> Instamart</h1>
            <Section
                title={"About Instamart"}
                description={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }
                showDescription={visibleSection === "about"}
                showDetailSection={(status) =>
                    setVisibleSection(status ? "about" : "")
                }
            />

            <Section
                title={"Team Instamart"}
                description={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
                }
                showDescription={visibleSection === "team"}
                showDetailSection={(status) =>
                    setVisibleSection(status ? "team" : "")
                }
            />

            <Section
                title={"Carrer at Instamart"}
                description={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
                }
                showDescription={visibleSection === "carrer"}
                showDetailSection={(status) =>
                    setVisibleSection(status ? "carrer" : "")
                }
            />

            <Section
                title={"Products at Instamart"}
                description={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
                }
                showDescription={visibleSection === "products"}
                showDetailSection={(status) =>
                    setVisibleSection(status ? "products" : "")
                }
            />

            <Section
                title={"Price"}
                description={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
                }
                showDescription={visibleSection === "prices"}
                showDetailSection={(status) =>
                    setVisibleSection(status ? "prices" : "")
                }
            />
        </div>
    );
};

export default Instamart;
