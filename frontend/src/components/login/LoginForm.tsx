import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useLoginuser from "../../hooks/useLoginUser";

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
});
type FormValues = z.infer<typeof schema>;

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const { mutate, isPending } = useLoginuser(reset);

    const onSubmit = (data: FormValues) => {
        mutate(data);
    };

    return (
        <div className="flip-card__front">
            <div className="title">Log in</div>
            <form className="flip-card__form" onSubmit={handleSubmit(onSubmit)}>
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
                    {isPending ? "Login..." : " Let's Go!"}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
