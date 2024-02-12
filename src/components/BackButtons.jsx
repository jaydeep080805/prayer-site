import { useNavigate } from "react-router-dom";

function BackButtonNavigationPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={goBack}
      className="absolute top-[5.5rem] left-1 w-fit py-2 px-4 lg:top-28 md:left-4"
    >
      <i className="fa-solid fa-chevron-left" /> back
    </button>
  );
}

export { BackButtonNavigationPage };
