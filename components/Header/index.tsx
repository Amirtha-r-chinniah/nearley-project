import MonochromePhotosOutlinedIcon from "@mui/icons-material/MonochromePhotosOutlined";

export default function Header() {
  return (
    <div className="h-16 w-screen bg-[#145455]">
      <div className="flex text-center p-4 text-[#FFF]">
        <div>
          <MonochromePhotosOutlinedIcon fontSize="large"></MonochromePhotosOutlinedIcon>
        </div>
        <div className="ml-2 font-bold text-xl">FullyFilmy</div>
      </div>
    </div>
  );
}
