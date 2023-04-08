import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { AlertCircle, Clock7, CheckCircle2 } from "lucide-react";

const badgeVariants = cva("h-[38px] text-sm px-2 w-[130px] gap-1 items-center rounded-md flex", {
	variants: {
		variant: {
			relevant: "bg-relevant/20 text-relevant ",
			outdated: "bg-pending/20 text-pending ",
			pending: "bg-outdated/20 text-outdated",
		},
	},
	defaultVariants: {
		variant: "relevant",
	},
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon: boolean
}

const Badge = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, icon, ...rest }, ref) => {
		return (
			<span className={cn(badgeVariants({ variant, className }))} ref={ref} {...rest}>
				{icon && variant == "relevant" && <CheckCircle2 />}
				{icon && variant == "outdated" && <AlertCircle />}
				{icon && variant == "pending" && <Clock7 />}
				{variant}
			</span>
		);
	}
);

Badge.displayName = "Button";

export { badgeVariants, Badge };
