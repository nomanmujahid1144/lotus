import Link from "next/link"

export const Logo = ({ iconColor }) => {
    return (
        <Link href={'/'} className="absolute inset-0 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={`${iconColor} lotus`} width="32.276" height="17.424">
                <g data-name="Group 172703">
                    <path d="M21.66 8.82c0 4.316-3.932 7.738-5.02 8.604-.17-1.196-1.14-6.533-4.99-8.737a7.225 7.225 0 0 0-.574-.294C11.354 3.443 16.362 0 16.362 0s4.794 3.445 5.261 8.094c.025.24.038.482.038.726Z" fillRule="evenodd" data-name="Path 10531" />
                    <path d="M15.178 17.382H3.606C.413 14.444 0 9.442 0 9.442s5.433-2.473 9.71-.509c.196.088.387.187.576.295 3.396 1.944 4.55 6.33 4.892 8.154Z" fillRule="evenodd" data-name="Path 10532" />
                    <path d="M32.276 9.4s-.398 5.038-3.613 7.982h-9.94c1.56-1.44 4.143-4.35 4.143-7.848 0-.245-.013-.486-.038-.727 4.227-1.762 9.448.592 9.448.592Z" fillRule="evenodd" data-name="Path 10533" />
                </g>
            </svg>
        </Link>
    )
}