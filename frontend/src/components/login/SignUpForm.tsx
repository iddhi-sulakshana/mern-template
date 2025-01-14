import { useForm } from "react-hook-form";
import useCreateUser from "../../hooks/useCreateUser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(128),
});
type FormValues = z.infer<typeof schema>;

function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    const { mutate, isPending } = useCreateUser(reset);

    const onSubmit = (data: FormValues) => {
        mutate(data);
    };

    return (
        <div className="flip-card__back">
            <div className="title">Sign up</div>
            <form className="flip-card__form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="flip-card__input"
                    placeholder="Name"
                    type="name"
                    {...register("name")}
                />
                {errors.name && <p>{errors.name.message}</p>}
                <input
                    className="flip-card__input"
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input
                    className="flip-card__input"
                    placeholder="Password"
                    type="password"
                    {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <button
                    type="submit"
                    className="flip-card__btn"
                    disabled={isPending}
                >
                    {isPending ? "Creating..." : " Confirm!"}
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;
