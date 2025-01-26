const TestimonialCard = ({ testimonial }) => {
  if (testimonial.text) {
    return (
      <div className="bg-darkBlue text-white px-4 py-2 rounded-lg w-44 text-base">
        <h4 className="font-bold mb-2">{testimonial.author}</h4>
        <p>{testimonial.text}</p>
      </div>
    );
  } else {
    return <div>VIDEO</div>;
  }
};

export default TestimonialCard;
