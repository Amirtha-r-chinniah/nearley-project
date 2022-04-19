import MonochromePhotosOutlinedIcon from "@mui/icons-material/MonochromePhotosOutlined";
export default function Footer() {
  return (
    <footer
      data-test="footer"
      className="flex flex-col items-center gap-2 bg-[#204354] p-4 text-xs text-white md:flex-row md:justify-center"
    >
      <div>Cinema is a mirror by which we often see ourselves</div>
      <p className="hidden md:flex md:justify-center">|</p>
      <div className="flex">
        <p>Content brewed by FullyFilmy&nbsp;</p>
        <MonochromePhotosOutlinedIcon sx={{ width: "16px", height: "16px" }} />
        <p>&nbsp;</p>
      </div>
    </footer>
  );
}
