import "../styles/Dialog.css";

interface Prop {
  size_: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}
export default function Dialog({ size_, setSize }: Prop) {
  const handleClick = () => {
    setSize("");
  };
  return (
    <dialog open={size_ !== ""}>
      <div id="cover">
        <div id="bg-div">
        </div>

        <div id="close-btn" onClick={handleClick}>
          <img src="close-x-.svg" alt="" width={30} />
        </div>
      </div>

      <h1>What is Lorem Ipsum?</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="video-container">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/ci0H1thFP4s?si=OyRrpzbHyppNoFgM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </dialog>
  );
}
