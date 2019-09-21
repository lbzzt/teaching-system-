import MakeTestPaper from "@/views/test/MakeTestPaper.vue"
import TestPaperMange from "@/views/test/TestPaperMange.vue"
import TestResult from "@/views/test/TestResult.vue"
import TestSetter from "@/views/test/TestSetter.vue"
import ViewTestPaper from "@/views/test/ViewTestPaper.vue"
export default[
    {
    path: "/MakeTestPaper",
    name: "MakeTestPaper",
    component:MakeTestPaper 
    },
    {
        path: "/TestPaperMange",
        name: "TestPaperMange",
        component:TestPaperMange 
    },
    {
        path: "/TestResult",
        name: "TestResult",
        component:TestResult 
    },
    {
        path: "/TestSetter",
        name: "TestSetter",
        component:TestSetter 
    },
    {
        
            path: "/ViewTestPaper",
            name: "ViewTestPaper",
            component:ViewTestPaper 
    
    }
]