// CALCWP syllabus data.
// `file` is the notebook filename in /notebooks/. `ready: true` means the
// notebook exists and links to Colab; `ready: false` renders "Coming soon".
const REPO = "matth426/Calculus-with-Python-Programming";
const COLAB_BASE = `https://colab.research.google.com/github/${REPO}/blob/main/notebooks/`;

const differentialWeeks = [
  { n: 1,  title: "Functions, evaluating f(x), domain & range", tags: ["Jupyter basics", "print()", "variables"], file: "calcwp_wk1_intro_to_python.ipynb", ready: true },
  { n: 2,  title: "Graphs & transformations of functions", tags: ["numpy.linspace", "matplotlib"], file: "calcwp_wk2_graphing_functions.ipynb", ready: true },
  { n: 3,  title: "Limits — intuition via tables & graphs", tags: ["for loops", "lists"], file: "calcwp_wk3_limits.ipynb", ready: true },
  { n: 4,  title: "Limit laws & continuity", tags: ["sympy.limit()", "if / else"], file: "calcwp_wk4_continuity.ipynb", ready: true },
  { n: 5,  title: "Derivative as slope / rate of change", tags: ["difference quotient", "def"], file: "calcwp_wk5_derivative_intro.ipynb", ready: false },
  { n: 6,  title: "Differentiation rules (power, product, quotient, chain)", tags: ["sympy.diff()"], file: "calcwp_wk6_differentiation_rules.ipynb", ready: false },
  { n: 7,  title: "Higher-order derivatives, implicit differentiation", tags: ["nested calls", "sympy.diff() order"], file: "calcwp_wk7_higher_order_derivatives.ipynb", ready: false },
  { n: 8,  title: "Rates of change & motion problems", tags: ["reusable def functions"], file: "calcwp_wk8_motion_problems.ipynb", ready: false },
  { n: 9,  title: "Curve sketching (concavity, inflection)", tags: ["sympy.solve()", "matplotlib annotations"], file: "calcwp_wk9_curve_sketching.ipynb", ready: false },
  { n: 10, title: "Optimization (max / min problems)", tags: ["scipy.optimize"], file: "calcwp_wk10_optimization.ipynb", ready: false },
  { n: 11, title: "Related rates", tags: ["multi-variable sympy"], file: "calcwp_wk11_related_rates.ipynb", ready: false },
  { n: 12, title: "Review + Lab Exam — Differential Calculus", tags: ["review"], file: "calcwp_wk12_review_exam.ipynb", ready: false, exam: true },
];

const integralWeeks = [
  { n: 13, title: "Antiderivatives & indefinite integrals", tags: ["sympy.integrate()"], file: "calcwp_wk13_antiderivatives.ipynb", ready: false },
  { n: 14, title: "Riemann sums & numerical integration", tags: ["trapezoid rule", "Simpson's rule"], file: "calcwp_wk14_riemann_sums.ipynb", ready: false },
  { n: 15, title: "The Fundamental Theorem of Calculus", tags: ["scipy.integrate.quad()"], file: "calcwp_wk15_fundamental_theorem.ipynb", ready: false },
  { n: 16, title: "Integration techniques (substitution, by parts)", tags: ["sympy verification"], file: "calcwp_wk16_integration_techniques.ipynb", ready: false },
  { n: 17, title: "Area between curves", tags: ["sympy.integrate()", "shaded plots"], file: "calcwp_wk17_area_between_curves.ipynb", ready: false },
  { n: 18, title: "Volumes of revolution (disk / washer / shell)", tags: ["mplot3d"], file: "calcwp_wk18_volumes_of_revolution.ipynb", ready: false },
  { n: 19, title: "Applications (work, growth models, economics)", tags: ["numpy arrays"], file: "calcwp_wk19_applications.ipynb", ready: false },
  { n: 20, title: "Improper integrals", tags: ["sympy.oo"], file: "calcwp_wk20_improper_integrals.ipynb", ready: false },
  { n: 21, title: "Intro to differential equations", tags: ["Euler's method", "slope fields"], file: "calcwp_wk21_differential_equations.ipynb", ready: false },
  { n: 22, title: "Sequences & series, Taylor polynomials", tags: ["sympy.series()"], file: "calcwp_wk22_taylor_series.ipynb", ready: false },
  { n: 23, title: "Review + Lab Exam — Integral Calculus", tags: ["review"], file: "calcwp_wk23_review_exam.ipynb", ready: false, exam: true },
  { n: 24, title: "Capstone project + presentations", tags: ["open-ended modeling"], file: "calcwp_wk24_capstone.ipynb", ready: false, exam: true },
];

function renderWeeks(weeks, containerId) {
  const list = document.getElementById(containerId);
  if (!list) return;

  const rows = weeks.map(w => {
    const tagHtml = w.tags
      .map(t => `<span class="tag${w.exam ? " tag-exam" : ""}">${t}</span>`)
      .join("");

    const action = w.ready
      ? `<a class="open-link" href="${COLAB_BASE}${w.file}" target="_blank" rel="noopener">Open in Colab ↗</a>`
      : `<span class="coming-soon">Coming soon</span>`;

    return `
      <li class="week-row">
        <span class="week-num">${String(w.n).padStart(2, "0")}</span>
        <span class="week-body">
          <p class="week-title">${w.title}</p>
          <span class="week-meta">${tagHtml}</span>
        </span>
        <span class="week-action">${action}</span>
      </li>`;
  }).join("");

  list.innerHTML = rows;
}

renderWeeks(differentialWeeks, "diff-weeks");
renderWeeks(integralWeeks, "int-weeks");
