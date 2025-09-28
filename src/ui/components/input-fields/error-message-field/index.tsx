import { FlexLayout } from "@/components/layouts";
import { BodyText } from "@/components/text";

export const ErrorMessageField = (props: any) => {
  const { message = "Required" } = props;
  return (
    <FlexLayout>
      <BodyText
        variant="caption"
        color="error.main"
        fontWeight="fontWeightMedium"
        component="span"
      >
        {message}
      </BodyText>
    </FlexLayout>
  );
};

export default ErrorMessageField;
