package ch08.controller.api;

import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import ch08.dto.JsonResult;
import ch08.dto.XmlResult;
import ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping(value="/text", method=RequestMethod.GET)
	public String text() {
		 return "Text Data" ;
	}
	
	@ResponseBody
	@RequestMapping(value="/html", method=RequestMethod.GET)
	public String html() {
		return "<h1>Ajax 연습</h1><p>HTML데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping(value="/xml", method=RequestMethod.GET)
	public XmlResult xml() { //xml 로 보내는 걸 알 수 있도록 ... 
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo(); //static
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이 ~");
		
		return  XmlResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/json", method=RequestMethod.GET)
	//@GetMapping("/json")
	public JsonResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이 ~");
		
		return JsonResult.success(vo);
	}
}
