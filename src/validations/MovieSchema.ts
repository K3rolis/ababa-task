import * as yup from 'yup';

export const movieSchema = yup.object().shape({
  title: yup.string().required().min(2),
  rating: yup.number().required(),
  releasedYear: yup.number().required(),
  description: yup.string().required().min(2),
});
