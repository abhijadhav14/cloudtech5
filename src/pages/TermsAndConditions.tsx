import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Admission & Enrollment",
      content: [
        "Admission is confirmed only after full/partial fee payment and submission of required documents.",
        "Course selection is final at the time of enrollment and cannot be changed later without management approval.",
        "The institute reserves the right to deny admission without assigning any reason.",
      ],
    },
    {
      title: "2. Fees & Payment Policy",
      content: [
        "Course fees once paid are non-refundable and non-transferable.",
        "Fees must be paid as per the agreed schedule.",
        "Any delay in payment may result in suspension of training access.",
        "Taxes (GST) are applicable as per government rules.",
      ],
    },
    {
      title: "3. Course Delivery",
      content: [
        "Training will be conducted in online mode.",
        "Course content, trainers, batch timings, and syllabus may change based on availability.",
        "Recorded sessions (if provided) are for personal use only and cannot be shared.",
      ],
    },
    {
      title: "4. Attendance & Discipline",
      content: [
        "Minimum 80% attendance is recommended for course completion.",
        "Students must maintain professional behavior.",
        "Any misconduct may lead to termination of enrollment without refund.",
      ],
    },
    {
      title: "5. Study Materials",
      content: [
        "All study materials, videos, and documents are the intellectual property of the institute.",
        "Copying, sharing, or selling materials is strictly prohibited.",
      ],
    },
    {
      title: "6. Placement Assistance",
      content: [
        "Placement support is assistance-based, not a job guarantee.",
        "Interview opportunities depend on student performance, attendance, and market conditions.",
        "The institute is not responsible if a student fails to clear interviews.",
      ],
    },
    {
      title: "7. Certification",
      content: [
        "Course completion certificates are issued only after:",
        "• Completing the course",
        "• Clearing assessments (if any)",
        "• Full fee payment",
      ],
    },
    {
      title: "8. Refund & Cancellation Policy",
      content: [
        "Fees once paid are not refundable under any circumstances.",
        "If the institute cancels a batch, students may opt for:",
        "• Batch transfer, or",
        "• Fee adjustment for another course.",
      ],
    },
    {
      title: "9. Batch Transfer",
      content: [
        "Batch transfer is subject to availability and management approval.",
        "Administrative charges may apply.",
      ],
    },
    {
      title: "10. Technical Requirements (For Online Training)",
      content: [
        "Students must have:",
        "• Laptop/Desktop",
        "• Stable internet connection",
        "• Basic computer knowledge",
        "The institute is not responsible for connectivity issues at the student's end.",
      ],
    },
    {
      title: "11. Limitation of Liability",
      content: [
        "The institute is not responsible for:",
        "• Job loss or career outcomes",
        "• Technical failures",
        "• Personal expenses incurred by students",
      ],
    },
    {
      title: "12. Data Privacy",
      content: [
        "Student data will be used only for academic and placement purposes.",
        "The institute will not share personal data with third parties without consent.",
      ],
    },
    {
      title: "13. Legal Jurisdiction",
      content: [
        "All disputes are subject to the jurisdiction of the institute's registered city.",
      ],
    },
    {
      title: "14. Agreement",
      content: [
        "By enrolling, the student agrees to all the above terms and conditions.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-blue-100 text-lg">Please read these terms carefully before enrolling in our courses</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 md:p-12">
            <div className="prose prose-sm max-w-none space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-900">
                    {section.title}
                  </h2>
                  <div className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Disclaimer */}
              <div className="border-t-2 pt-8 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed italic">
                  The above terms and conditions are subject to change at any time without prior notice. 
                  The institute reserves the right to update, modify, or amend these terms. Students will 
                  be notified of any significant changes. Continued enrollment constitutes acceptance of 
                  the updated terms.
                </p>
              </div>

              {/* Contact for Clarification */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Questions?</h3>
                <p className="text-gray-700">
                  If you have any questions or clarifications regarding these terms and conditions, 
                  please contact our admissions team through the contact page or reach out to us directly.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
