const validateCreateReview = (values: { message: string, score: number }) => {
    let scoreError;
    let messageError;
    let errors = {};

    console.log(values.score);
    //score errors
    if (!values.score) {
        scoreError = "A score is required.";
        Object.assign(errors, { score: scoreError });
    }
    //message errors
    if (!values.message) {
        messageError = "A message is required.";
        Object.assign(errors, { message: messageError });
    }

    return errors;
};

export default validateCreateReview;