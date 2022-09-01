const WelcomeImg = (props) => {
  return (
    <div className="h-[600px]">
      <img src={`Assets/${props.image}`} className="h-full object-cover" />
    </div>
  );
};

export default WelcomeImg;
